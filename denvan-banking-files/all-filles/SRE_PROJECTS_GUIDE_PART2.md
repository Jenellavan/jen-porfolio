# SRE Projects Implementation Guide - Part 2

## GitHub Actions Workflows & Infrastructure as Code

---

## 🔄 GitHub Actions Workflows

### Complete CI/CD Pipeline

**File:** `.github/workflows/ci-cd-complete.yml`

```yaml
name: Complete CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  AWS_REGION: us-east-1
  ECR_REPOSITORY: denvan-banking
  EKS_CLUSTER: denvan-banking-prod
  
jobs:
  # ==========================================
  # Job 1: Lint and Code Quality
  # ==========================================
  lint:
    name: Lint & Code Quality
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run ESLint
      run: npm run lint
    
    - name: Run Prettier
      run: npm run format:check
    
    - name: Check for secrets in code
      uses: trufflesecurity/trufflehog@main
      with:
        path: ./
        base: ${{ github.event.repository.default_branch }}
        head: HEAD

  # ==========================================
  # Job 2: Security Scanning
  # ==========================================
  security-scan:
    name: Security Scanning
    runs-on: ubuntu-latest
    needs: lint
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Run Snyk Security Scan
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
      with:
        args: --severity-threshold=high --fail-on=upgradable
    
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        scan-type: 'fs'
        scan-ref: '.'
        format: 'sarif'
        output: 'trivy-results.sarif'
        severity: 'CRITICAL,HIGH'
    
    - name: Upload Trivy results to GitHub Security
      uses: github/codeql-action/upload-sarif@v2
      with:
        sarif_file: 'trivy-results.sarif'
    
    - name: OWASP Dependency Check
      uses: dependency-check/Dependency-Check_Action@main
      with:
        project: 'denvan-banking'
        path: '.'
        format: 'HTML'

  # ==========================================
  # Job 3: Unit Tests
  # ==========================================
  test:
    name: Unit & Integration Tests
    runs-on: ubuntu-latest
    needs: lint
    
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: test_password
          POSTGRES_DB: denvan_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      
      redis:
        image: redis:7-alpine
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run unit tests
      run: npm run test:unit
      env:
        DATABASE_URL: postgresql://postgres:test_password@localhost:5432/denvan_test
        REDIS_URL: redis://localhost:6379
    
    - name: Run integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:test_password@localhost:5432/denvan_test
        REDIS_URL: redis://localhost:6379
    
    - name: Generate coverage report
      run: npm run test:coverage
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        files: ./coverage/lcov.info
        flags: unittests
        fail_ci_if_error: true

  # ==========================================
  # Job 4: Build Docker Images
  # ==========================================
  build:
    name: Build & Push Docker Images
    runs-on: ubuntu-latest
    needs: [security-scan, test]
    if: github.ref == 'refs/heads/main'
    
    outputs:
      image_tag: ${{ steps.meta.outputs.tags }}
      image_digest: ${{ steps.build.outputs.digest }}
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ env.AWS_REGION }}
    
    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2
    
    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v4
      with:
        images: ${{ steps.login-ecr.outputs.registry }}/${{ env.ECR_REPOSITORY }}
        tags: |
          type=sha,prefix=,format=short
          type=ref,event=branch
          type=semver,pattern={{version}}
    
    - name: Build and push API image
      id: build
      uses: docker/build-push-action@v4
      with:
        context: ./backend
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
        build-args: |
          BUILD_DATE=${{ github.event.head_commit.timestamp }}
          VCS_REF=${{ github.sha }}
    
    - name: Scan image with Trivy
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: ${{ steps.meta.outputs.tags }}
        format: 'sarif'
        output: 'trivy-image-results.sarif'
        severity: 'CRITICAL,HIGH'
    
    - name: Sign container image
      run: |
        echo "${{ secrets.COSIGN_KEY }}" > cosign.key
        cosign sign --key cosign.key ${{ steps.meta.outputs.tags }}

  # ==========================================
  # Job 5: Deploy to Staging
  # ==========================================
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: build
    environment: staging
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ env.AWS_REGION }}
    
    - name: Update kubeconfig
      run: |
        aws eks update-kubeconfig \
          --name denvan-banking-staging \
          --region ${{ env.AWS_REGION }}
    
    - name: Deploy to staging with Helm
      run: |
        helm upgrade --install denvan-banking \
          ./helm/denvan-banking \
          --namespace staging \
          --create-namespace \
          --set image.tag=${{ needs.build.outputs.image_tag }} \
          --set environment=staging \
          --wait \
          --timeout 10m
    
    - name: Run smoke tests
      run: |
        kubectl wait --for=condition=ready pod \
          -l app=denvan-banking \
          -n staging \
          --timeout=300s
        
        npm run test:smoke -- --env=staging
    
    - name: Notify Slack - Staging Deployed
      uses: slackapi/slack-github-action@v1
      with:
        payload: |
          {
            "text": "✅ Staging deployment successful",
            "blocks": [
              {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "*Staging Deployment*\n✅ Success\nCommit: ${{ github.sha }}\nImage: ${{ needs.build.outputs.image_tag }}"
                }
              }
            ]
          }
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}

  # ==========================================
  # Job 6: Load Testing
  # ==========================================
  load-test:
    name: Load Test Staging
    runs-on: ubuntu-latest
    needs: deploy-staging
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup k6
      run: |
        sudo gpg -k
        sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg \
          --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
        echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | \
          sudo tee /etc/apt/sources.list.d/k6.list
        sudo apt-get update
        sudo apt-get install k6
    
    - name: Run load test
      run: |
        k6 run \
          --out json=load-test-results.json \
          --summary-export=summary.json \
          scripts/load-test/k6-load-test.js
    
    - name: Analyze results
      run: |
        python scripts/load-test/analyze-results.py \
          --results load-test-results.json \
          --threshold-p95 200 \
          --threshold-p99 500
    
    - name: Upload load test results
      uses: actions/upload-artifact@v3
      with:
        name: load-test-results
        path: |
          load-test-results.json
          summary.json

  # ==========================================
  # Job 7: Deploy to Production
  # ==========================================
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: [deploy-staging, load-test]
    environment: production
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Check error budget
      run: |
        python scripts/sre/check-error-budget.py \
          --slo availability \
          --threshold 10
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ env.AWS_REGION }}
    
    - name: Update kubeconfig
      run: |
        aws eks update-kubeconfig \
          --name ${{ env.EKS_CLUSTER }} \
          --region ${{ env.AWS_REGION }}
    
    - name: Blue/Green Deployment
      run: |
        # Deploy to green environment
        helm upgrade --install denvan-banking-green \
          ./helm/denvan-banking \
          --namespace production \
          --set image.tag=${{ needs.build.outputs.image_tag }} \
          --set environment=production \
          --set deployment.color=green \
          --wait \
          --timeout 10m
        
        # Wait for green to be healthy
        kubectl wait --for=condition=ready pod \
          -l app=denvan-banking,color=green \
          -n production \
          --timeout=300s
        
        # Run smoke tests on green
        npm run test:smoke -- --env=production-green
        
        # Switch traffic to green
        kubectl patch service denvan-banking \
          -n production \
          -p '{"spec":{"selector":{"color":"green"}}}'
        
        # Monitor for 5 minutes
        sleep 300
        
        # Check error rate
        ERROR_RATE=$(curl -s "http://prometheus:9090/api/v1/query?query=rate(http_requests_total{status=~\"5..\"}[5m])" | jq -r '.data.result[0].value[1]')
        if (( $(echo "$ERROR_RATE > 0.001" | bc -l) )); then
          echo "Error rate too high, rolling back"
          kubectl patch service denvan-banking \
            -n production \
            -p '{"spec":{"selector":{"color":"blue"}}}'
          exit 1
        fi
        
        # Delete old blue deployment
        helm delete denvan-banking-blue -n production || true
    
    - name: Record deployment
      run: |
        curl -X POST "https://api.denvan.com/deployments" \
          -H "Authorization: Bearer ${{ secrets.DEPLOY_API_KEY }}" \
          -d "{
            \"service\": \"denvan-banking-api\",
            \"version\": \"${{ github.sha }}\",
            \"environment\": \"production\",
            \"deployed_by\": \"${{ github.actor }}\",
            \"timestamp\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"
          }"
    
    - name: Create Grafana annotation
      run: |
        curl -X POST "https://grafana.denvan.com/api/annotations" \
          -H "Authorization: Bearer ${{ secrets.GRAFANA_API_KEY }}" \
          -d "{
            \"dashboardId\": 1,
            \"time\": $(date +%s)000,
            \"tags\": [\"deployment\", \"production\"],
            \"text\": \"Deployed ${{ github.sha }} to production\"
          }"
    
    - name: Notify Slack - Production Deployed
      uses: slackapi/slack-github-action@v1
      with:
        payload: |
          {
            "text": "🚀 Production deployment successful",
            "blocks": [
              {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "*Production Deployment*\n🚀 Success\nCommit: ${{ github.sha }}\nDeployed by: ${{ github.actor }}"
                }
              }
            ]
          }
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}

  # ==========================================
  # Job 8: Post-Deployment Validation
  # ==========================================
  post-deploy-validation:
    name: Post-Deployment Validation
    runs-on: ubuntu-latest
    needs: deploy-production
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Wait for metrics stabilization
      run: sleep 300
    
    - name: Validate SLOs
      run: |
        python scripts/sre/validate-slos.py \
          --environment production \
          --duration 5m
    
    - name: Check for alerts
      run: |
        FIRING_ALERTS=$(curl -s "http://prometheus:9090/api/v1/query?query=ALERTS{alertstate=\"firing\"}" | jq -r '.data.result | length')
        if [ "$FIRING_ALERTS" -gt 0 ]; then
          echo "Warning: $FIRING_ALERTS alerts firing after deployment"
          curl -s "http://prometheus:9090/api/v1/query?query=ALERTS{alertstate=\"firing\"}" | jq .
        fi
    
    - name: Run synthetic tests
      run: |
        npm run test:synthetic -- --env=production
```

---

## 🏗️ Complete Terraform Infrastructure

### Main Infrastructure Configuration

**File:** `infrastructure/terraform/main.tf`

```hcl
terraform {
  required_version = ">= 1.5"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.23"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.11"
    }
  }
  
  backend "s3" {
    bucket         = "denvan-banking-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}

provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Project     = "denvan-banking"
      Environment = var.environment
      ManagedBy   = "Terraform"
      Owner       = "SRE"
      CostCenter  = "Engineering"
    }
  }
}

# Data source for current AWS account
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

# Locals
locals {
  cluster_name = "denvan-banking-${var.environment}"
  
  common_tags = {
    Application = "denvan-banking"
    Environment = var.environment
    Terraform   = "true"
  }
}

# ==========================================
# VPC Module
# ==========================================
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  
  name = "${local.cluster_name}-vpc"
  cidr = var.vpc_cidr
  
  azs             = var.availability_zones
  private_subnets = var.private_subnet_cidrs
  public_subnets  = var.public_subnet_cidrs
  
  enable_nat_gateway   = true
  single_nat_gateway   = var.environment != "production"
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  # VPC Flow Logs for security monitoring
  enable_flow_log                      = true
  create_flow_log_cloudwatch_iam_role  = true
  create_flow_log_cloudwatch_log_group = true
  flow_log_retention_in_days           = 30
  
  # Kubernetes tags for ELB discovery
  public_subnet_tags = {
    "kubernetes.io/role/elb"                    = "1"
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
  }
  
  private_subnet_tags = {
    "kubernetes.io/role/internal-elb"           = "1"
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
  }
  
  tags = local.common_tags
}

# ==========================================
# EKS Cluster Module
# ==========================================
module "eks" {
  source = "terraform-aws-modules/eks/aws"
  version = "~> 19.0"
  
  cluster_name    = local.cluster_name
  cluster_version = "1.28"
  
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets
  
  # Cluster endpoint access
  cluster_endpoint_public_access  = true
  cluster_endpoint_private_access = true
  
  # Cluster addons
  cluster_addons = {
    coredns = {
      most_recent = true
    }
    kube-proxy = {
      most_recent = true
    }
    vpc-cni = {
      most_recent = true
    }
    aws-ebs-csi-driver = {
      most_recent = true
    }
  }
  
  # EKS Managed Node Groups
  eks_managed_node_groups = {
    # General purpose nodes
    general = {
      name = "${local.cluster_name}-general"
      
      instance_types = ["t3.large"]
      capacity_type  = "ON_DEMAND"
      
      min_size     = var.environment == "production" ? 3 : 2
      max_size     = var.environment == "production" ? 10 : 5
      desired_size = var.environment == "production" ? 3 : 2
      
      labels = {
        role = "general"
      }
      
      tags = {
        NodeGroup = "general"
      }
    }
    
    # Spot instances for non-critical workloads
    spot = {
      name = "${local.cluster_name}-spot"
      
      instance_types = ["t3.large", "t3a.large"]
      capacity_type  = "SPOT"
      
      min_size     = 0
      max_size     = 5
      desired_size = var.environment == "production" ? 2 : 1
      
      labels = {
        role = "spot"
      }
      
      taints = [{
        key    = "spot"
        value  = "true"
        effect = "NoSchedule"
      }]
      
      tags = {
        NodeGroup = "spot"
      }
    }
  }
  
  # Cluster security group rules
  cluster_security_group_additional_rules = {
    ingress_nodes_ephemeral_ports_tcp = {
      description                = "Nodes on ephemeral ports"
      protocol                   = "tcp"
      from_port                  = 1025
      to_port                    = 65535
      type                       = "ingress"
      source_node_security_group = true
    }
  }
  
  # Node security group rules
  node_security_group_additional_rules = {
    ingress_self_all = {
      description = "Node to node all ports/protocols"
      protocol    = "-1"
      from_port   = 0
      to_port     = 0
      type        = "ingress"
      self        = true
    }
    
    egress_all = {
      description      = "Node all egress"
      protocol         = "-1"
      from_port        = 0
      to_port          = 0
      type             = "egress"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = ["::/0"]
    }
  }
  
  # Enable IRSA (IAM Roles for Service Accounts)
  enable_irsa = true
  
  tags = local.common_tags
}

# ==========================================
# RDS PostgreSQL Database
# ==========================================
module "db" {
  source = "terraform-aws-modules/rds/aws"
  version = "~> 6.0"
  
  identifier = "${local.cluster_name}-db"
  
  engine               = "postgres"
  engine_version       = "15.3"
  family               = "postgres15"
  major_engine_version = "15"
  instance_class       = var.db_instance_class
  
  allocated_storage     = var.db_allocated_storage
  max_allocated_storage = var.db_max_allocated_storage
  storage_encrypted     = true
  
  db_name  = "denvanbanking"
  username = "dbadmin"
  port     = 5432
  
  # Security
  iam_database_authentication_enabled = true
  vpc_security_group_ids             = [aws_security_group.rds.id]
  db_subnet_group_name               = module.vpc.database_subnet_group_name
  
  # High Availability
  multi_az               = var.environment == "production"
  
  # Backups
  backup_retention_period = var.environment == "production" ? 30 : 7
  backup_window          = "03:00-04:00"
  maintenance_window     = "Mon:04:00-Mon:05:00"
  
  # Enhanced Monitoring
  enabled_cloudwatch_logs_exports = ["postgresql", "upgrade"]
  create_monitoring_role          = true
  monitoring_interval             = 60
  monitoring_role_name            = "${local.cluster_name}-rds-monitoring"
  
  # Performance Insights
  performance_insights_enabled          = true
  performance_insights_retention_period = 7
  
  # Deletion protection for production
  deletion_protection = var.environment == "production"
  skip_final_snapshot = var.environment != "production"
  
  tags = local.common_tags
}

# RDS Security Group
resource "aws_security_group" "rds" {
  name_prefix = "${local.cluster_name}-rds-"
  vpc_id      = module.vpc.vpc_id
  
  ingress {
    description     = "PostgreSQL from EKS nodes"
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [module.eks.node_security_group_id]
  }
  
  egress {
    description = "All outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  tags = merge(local.common_tags, {
    Name = "${local.cluster_name}-rds-sg"
  })
}

# ==========================================
# ElastiCache Redis
# ==========================================
module "redis" {
  source = "terraform-aws-modules/elasticache/aws"
  version = "~> 1.0"
  
  cluster_id           = "${local.cluster_name}-redis"
  engine               = "redis"
  engine_version       = "7.0"
  node_type            = var.redis_node_type
  num_cache_nodes      = var.environment == "production" ? 2 : 1
  parameter_group_name = "default.redis7"
  
  subnet_group_name  = module.vpc.elasticache_subnet_group_name
  security_group_ids = [aws_security_group.redis.id]
  
  automatic_failover_enabled = var.environment == "production"
  multi_az_enabled          = var.environment == "production"
  
  at_rest_encryption_enabled = true
  transit_encryption_enabled = true
  auth_token_enabled         = true
  
  snapshot_retention_limit = var.environment == "production" ? 5 : 1
  snapshot_window         = "03:00-05:00"
  
  tags = local.common_tags
}

# Redis Security Group
resource "aws_security_group" "redis" {
  name_prefix = "${local.cluster_name}-redis-"
  vpc_id      = module.vpc.vpc_id
  
  ingress {
    description     = "Redis from EKS nodes"
    from_port       = 6379
    to_port         = 6379
    protocol        = "tcp"
    security_groups = [module.eks.node_security_group_id]
  }
  
  egress {
    description = "All outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  tags = merge(local.common_tags, {
    Name = "${local.cluster_name}-redis-sg"
  })
}

# ==========================================
# Monitoring Stack (Prometheus/Grafana)
# ==========================================

# Prometheus using Helm
resource "helm_release" "prometheus" {
  name       = "prometheus"
  repository = "https://prometheus-community.github.io/helm-charts"
  chart      = "kube-prometheus-stack"
  version    = "51.0.0"
  namespace  = "monitoring"
  
  create_namespace = true
  
  values = [
    templatefile("${path.module}/helm-values/prometheus-values.yaml", {
      cluster_name = local.cluster_name
      environment  = var.environment
    })
  ]
  
  set {
    name  = "prometheus.prometheusSpec.retention"
    value = var.environment == "production" ? "30d" : "7d"
  }
  
  set {
    name  = "prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.resources.requests.storage"
    value = var.environment == "production" ? "100Gi" : "50Gi"
  }
}

# ==========================================
# Outputs
# ==========================================
output "cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = module.eks.cluster_endpoint
}

output "cluster_name" {
  description = "EKS cluster name"
  value       = module.eks.cluster_name
}

output "rds_endpoint" {
  description = "RDS endpoint"
  value       = module.db.db_instance_endpoint
  sensitive   = true
}

output "redis_endpoint" {
  description = "Redis endpoint"
  value       = module.redis.configuration_endpoint_address
  sensitive   = true
}
```

---

*This is Part 2. Would you like me to create Part 3 with:*
- Portfolio website implementation
- More incident scenarios
- Load testing scripts
- Complete Kubernetes manifests?
