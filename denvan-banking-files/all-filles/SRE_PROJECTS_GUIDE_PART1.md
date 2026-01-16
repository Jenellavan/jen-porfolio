# Denvan-Banking SRE Projects - Complete Implementation Guide

## 🎯 Overview

This guide provides complete implementation details for two production-grade SRE projects that demonstrate real Site Reliability Engineering expertise, not demo code.

---

## 📦 GitHub Repository Structure

### Repository 1: `denvan-banking-web`
**Purpose:** Full-stack banking application with SRE ownership

```
denvan-banking-web/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                    # Build, test, security scan
│   │   ├── deploy-staging.yml        # Deploy to staging
│   │   ├── deploy-production.yml     # Deploy to production
│   │   ├── load-test.yml             # Automated load testing
│   │   └── security-scan.yml         # Daily security scans
│   ├── ISSUE_TEMPLATE/
│   │   ├── incident-report.md        # Incident template
│   │   └── postmortem.md             # Postmortem template
│   └── PULL_REQUEST_TEMPLATE.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   ├── Dockerfile
│   ├── package.json
│   └── next.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── services/
│   ├── Dockerfile
│   └── package.json
│
├── infrastructure/
│   ├── terraform/
│   │   ├── modules/
│   │   │   ├── vpc/
│   │   │   ├── eks/
│   │   │   ├── rds/
│   │   │   └── monitoring/
│   │   ├── environments/
│   │   │   ├── staging/
│   │   │   └── production/
│   │   └── main.tf
│   └── kubernetes/
│       ├── base/
│       │   ├── deployment.yaml
│       │   ├── service.yaml
│       │   ├── hpa.yaml              # Horizontal Pod Autoscaler
│       │   ├── pdb.yaml              # Pod Disruption Budget
│       │   └── network-policy.yaml
│       └── overlays/
│           ├── staging/
│           └── production/
│
├── monitoring/
│   ├── prometheus/
│   │   ├── alerts/
│   │   │   ├── slo-alerts.yaml       # SLO-based alerts
│   │   │   ├── saturation.yaml       # Resource saturation
│   │   │   └── latency.yaml          # Latency thresholds
│   │   └── prometheus.yaml
│   ├── grafana/
│   │   ├── dashboards/
│   │   │   ├── golden-signals.json   # Latency, Traffic, Errors, Saturation
│   │   │   ├── slo-dashboard.json    # SLO tracking
│   │   │   └── capacity.json         # Capacity planning
│   │   └── datasources.yaml
│   └── loki/
│       └── loki-config.yaml
│
├── sre/
│   ├── runbooks/
│   │   ├── high-latency.md           # Latency troubleshooting
│   │   ├── database-failover.md      # DB failover procedure
│   │   ├── deployment-rollback.md    # Rollback procedure
│   │   └── incident-response.md      # General incident response
│   ├── slo/
│   │   ├── definitions.yaml          # SLO definitions
│   │   └── error-budget.md           # Error budget policy
│   ├── capacity/
│   │   ├── traffic-model.md          # Traffic assumptions
│   │   ├── load-test-results/        # Load test reports
│   │   └── scaling-policy.md         # Auto-scaling strategy
│   ├── incidents/
│   │   ├── 2025-01-15-database-slowdown.md
│   │   ├── 2025-01-20-pod-crash-loop.md
│   │   └── 2025-02-01-api-timeout.md
│   └── postmortems/
│       ├── 2025-01-15-database-slowdown-postmortem.md
│       ├── 2025-01-20-pod-crash-loop-postmortem.md
│       └── template.md
│
├── scripts/
│   ├── chaos/
│   │   ├── kill-random-pod.sh        # Chaos engineering
│   │   ├── inject-latency.sh         # Latency injection
│   │   └── network-partition.sh      # Network failure simulation
│   ├── load-test/
│   │   ├── k6-load-test.js           # Load testing script
│   │   └── analyze-results.py        # Result analysis
│   └── deploy/
│       ├── blue-green-deploy.sh      # Blue/green deployment
│       └── rollback.sh               # Automated rollback
│
├── docs/
│   ├── architecture/
│   │   ├── system-diagram.md         # Architecture overview
│   │   ├── data-flow.md              # Data flow diagrams
│   │   └── disaster-recovery.md      # DR plan
│   ├── operations/
│   │   ├── on-call-guide.md          # On-call procedures
│   │   ├── escalation.md             # Escalation paths
│   │   └── maintenance-windows.md    # Maintenance procedures
│   └── sre-practices/
│       ├── change-management.md      # Change approval process
│       ├── deployment-strategy.md    # Deployment practices
│       └── incident-management.md    # Incident workflow
│
├── tests/
│   ├── load/
│   ├── integration/
│   └── smoke/
│
├── docker-compose.yml               # Local development
├── README.md                        # Project overview
├── SRE-README.md                    # SRE practices overview
└── ARCHITECTURE.md                  # Architecture documentation
```

### Repository 2: `denvan-banking-api`
**Purpose:** Production API with comprehensive observability

```
denvan-banking-api/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml
│       ├── performance-test.yml
│       └── chaos-test.yml
│
├── src/
│   ├── api/
│   │   ├── v1/
│   │   │   ├── routes/
│   │   │   └── controllers/
│   │   └── middleware/
│   │       ├── rate-limiter.js       # Rate limiting
│   │       ├── circuit-breaker.js    # Circuit breaker pattern
│   │       ├── retry.js              # Retry logic
│   │       └── timeout.js            # Request timeouts
│   ├── observability/
│   │   ├── metrics.js                # Prometheus metrics
│   │   ├── tracing.js                # Distributed tracing
│   │   └── logging.js                # Structured logging
│   └── resilience/
│       ├── health-check.js           # Health endpoints
│       └── graceful-shutdown.js      # Graceful shutdown
│
├── sre/
│   ├── slo/
│   │   ├── availability-slo.yaml     # 99.9% availability target
│   │   ├── latency-slo.yaml          # p99 < 200ms
│   │   └── error-budget-tracking.md  # Error budget burn rate
│   ├── observability/
│   │   ├── metrics-catalog.md        # All exposed metrics
│   │   ├── logging-standards.md      # Log format standards
│   │   └── tracing-guide.md          # Trace implementation
│   ├── failure-scenarios/
│   │   ├── pod-crash-scenario.md     # Pod failure simulation
│   │   ├── latency-spike-scenario.md # Latency injection
│   │   └── dependency-failure.md     # External service failure
│   └── incident-playbooks/
│       ├── high-error-rate.md        # Error rate spike response
│       ├── latency-degradation.md    # Latency response
│       └── dependency-down.md        # Dependency failure
│
├── monitoring/
│   ├── prometheus/
│   │   ├── recording-rules.yaml      # Metric aggregations
│   │   └── alert-rules.yaml          # Alert definitions
│   └── grafana/
│       └── dashboards/
│           ├── api-overview.json     # API health dashboard
│           ├── slo-tracking.json     # SLO compliance
│           └── error-budget.json     # Error budget dashboard
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── hpa.yaml
│   ├── pdb.yaml
│   └── service-monitor.yaml          # Prometheus scraping
│
├── docs/
│   ├── API.md                        # API documentation
│   ├── SLO.md                        # SLO definitions
│   └── RUNBOOK.md                    # Operational runbook
│
└── README.md
```

### Repository 3: `vanessa-sre-portfolio`
**Purpose:** Professional SRE portfolio website

```
vanessa-sre-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml                # Auto-deploy to GitHub Pages/Vercel
│
├── src/
│   ├── components/
│   │   ├── ProjectCard.jsx
│   │   ├── IncidentTimeline.jsx
│   │   ├── SLODashboard.jsx
│   │   └── PostmortemCard.jsx
│   ├── pages/
│   │   ├── index.jsx                 # Home page
│   │   ├── projects.jsx              # Projects showcase
│   │   ├── incidents.jsx             # Incident response examples
│   │   └── about.jsx                 # About/Contact
│   ├── data/
│   │   ├── projects.json             # Project metadata
│   │   ├── incidents.json            # Incident summaries
│   │   └── skills.json               # SRE skills
│   └── utils/
│       └── github-api.js             # Fetch from GitHub repos
│
├── public/
│   ├── diagrams/                     # Architecture diagrams
│   └── postmortems/                  # PDF postmortems
│
└── README.md
```

---

## 📋 Sample Incident Reports

### Incident 1: Database Connection Pool Exhaustion

**File:** `denvan-banking-web/sre/incidents/2025-01-15-database-slowdown.md`

```markdown
# Incident Report: Database Connection Pool Exhaustion

**Incident ID:** INC-2025-0115-001  
**Severity:** SEV-2 (High)  
**Status:** Resolved  
**Date:** January 15, 2025  
**Duration:** 47 minutes  

## Summary
Production API experienced elevated latency (p95: 3.2s, normal: 180ms) due to database connection pool exhaustion during peak traffic hours.

## Timeline (All times EST)

**14:23** - Prometheus alert fired: `api_latency_p95_high`  
**14:24** - On-call SRE (Vanessa) acknowledged alert  
**14:25** - Checked Grafana: confirmed latency spike affecting all endpoints  
**14:27** - Reviewed CloudWatch RDS metrics: connection count at maximum (100/100)  
**14:30** - Identified root cause: connection pool not released properly in error handling  
**14:32** - Emergency change approved: increased connection pool to 200  
**14:35** - Deployed hotfix to production via fast-track pipeline  
**14:40** - Confirmed latency returning to normal (p95: 210ms)  
**14:45** - Monitored error rates and saturation metrics  
**15:10** - Incident marked as resolved  

## Impact

**User Impact:**
- **Affected Users:** ~8,500 active sessions
- **Duration:** 47 minutes
- **Degradation:** API response times 15x normal
- **Failed Requests:** 0.3% error rate (normal: 0.01%)

**Business Impact:**
- Transaction processing delayed
- Customer complaints: 12 tickets
- No data loss or corruption

## Root Cause

Database connection pool configuration was set too conservatively (max: 100 connections). During traffic spike, connections were not released properly in error handling paths, leading to pool exhaustion.

**Contributing Factors:**
1. Inadequate load testing under failure scenarios
2. Missing connection leak detection
3. No automated scaling of connection pool based on traffic

## Detection

**Alert:** Prometheus alert `api_latency_p95_high` fired at 14:23  
**Alert Threshold:** p95 latency > 500ms for 2 minutes  
**Time to Detection:** < 1 minute after latency spike  

## Response Actions

**Immediate (during incident):**
1. ✅ Acknowledged alert and started investigation
2. ✅ Identified connection pool exhaustion via RDS metrics
3. ✅ Increased connection pool limit (emergency change)
4. ✅ Deployed hotfix via expedited pipeline
5. ✅ Verified resolution through monitoring

**Post-Incident:**
1. ✅ Fixed connection leak in error handling (PR #234)
2. ✅ Implemented connection pool monitoring alerts
3. ✅ Scheduled postmortem for Jan 16

## Communication

**Internal:**
- Incident Slack channel created at 14:24
- Engineering team notified at 14:26
- Leadership update at 14:35
- All-clear message at 15:10

**External:**
- Status page updated at 14:30
- Customer notification sent at 14:45

## SLO Impact

**Availability SLO:** 99.9% (monthly)  
**Error Budget Consumed:** 2.3% (47 min downtime)  
**Remaining Error Budget:** 97.7%  
**Status:** ✅ Within budget  

## Lessons Learned

**What Went Well:**
- Fast detection (< 1 minute)
- Clear runbook for connection issues
- Quick mitigation (12 minutes to deploy fix)
- No data loss or corruption

**What Went Wrong:**
- Connection leak not caught in testing
- Load tests didn't simulate failure scenarios
- Connection pool limits too conservative

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Fix connection leak in error handling | Backend Team | Jan 16 | ✅ Done |
| Add connection pool metrics to Grafana | SRE | Jan 17 | ✅ Done |
| Update load tests to include failure scenarios | QA Team | Jan 22 | 🟡 In Progress |
| Implement auto-scaling connection pool | Backend Team | Jan 30 | 🟡 In Progress |
| Add connection leak detection to CI | DevOps | Feb 5 | ⬜ Planned |

## Related Links

- [Postmortem](../postmortems/2025-01-15-database-slowdown-postmortem.md)
- [GitHub Issue #156](https://github.com/vanessa/denvan-banking-web/issues/156)
- [Runbook: Database Connection Issues](../runbooks/database-connection-issues.md)
- [Grafana Dashboard](https://grafana.denvan.com/d/db-connections)
```

---

## 📊 Sample Postmortem

**File:** `denvan-banking-web/sre/postmortems/2025-01-15-database-slowdown-postmortem.md`

```markdown
# Postmortem: Database Connection Pool Exhaustion

**Date:** January 16, 2025  
**Authors:** Vanessa Awo (SRE), Backend Team  
**Status:** Final  
**Incident:** [INC-2025-0115-001](../incidents/2025-01-15-database-slowdown.md)

---

## Executive Summary

On January 15, 2025, the Denvan Banking API experienced elevated latency for 47 minutes due to database connection pool exhaustion. The incident affected ~8,500 users during peak hours, with API latency increasing from 180ms (p95) to 3.2s. The root cause was a connection leak in error handling code combined with insufficient connection pool limits. The incident was resolved by increasing connection pool size and deploying a hotfix. No data was lost, and the error budget impact was 2.3%.

---

## Background

**System:** Denvan Banking API  
**Component:** PostgreSQL RDS connection pool  
**Traffic:** 450 req/sec average, 800 req/sec peak  
**Database:** PostgreSQL 14 on db.r5.xlarge (4 vCPU, 32 GB RAM)  
**Connection Pool:** HikariCP with max 100 connections  

---

## What Happened

### Timeline

| Time (EST) | Event |
|------------|-------|
| 14:20 | Traffic increased to 750 req/sec (normal peak behavior) |
| 14:23 | Prometheus alert: `api_latency_p95_high` fired |
| 14:23 | Database connections reached maximum (100/100) |
| 14:24 | On-call SRE acknowledged alert |
| 14:25 | Grafana analysis: confirmed latency across all endpoints |
| 14:27 | RDS CloudWatch: connection pool saturated |
| 14:30 | Root cause identified: connection leak + pool limit |
| 14:32 | Emergency change request approved |
| 14:35 | Hotfix deployed: increased pool to 200 connections |
| 14:40 | Latency returned to normal (p95: 210ms) |
| 15:10 | Incident declared resolved |

### Detection

**Alert Fired:** `api_latency_p95_high`  
**Threshold:** p95 latency > 500ms for 2 consecutive minutes  
**Detection Time:** < 60 seconds after latency spike  
**Mean Time to Detect (MTTD):** Excellent  

### Impact

**Users Affected:** ~8,500 active sessions  
**Duration:** 47 minutes  
**Severity:** SEV-2 (High)  

**Performance Impact:**
- Latency p95: 180ms → 3,200ms (15x degradation)
- Latency p99: 350ms → 5,800ms (16x degradation)
- Error rate: 0.01% → 0.3% (30x increase)

**Business Impact:**
- Transaction delays affecting user experience
- 12 customer support tickets
- Temporary halt in new account creation
- No financial loss or data corruption

**SLO Impact:**
- Monthly availability SLO: 99.9%
- Downtime: 47 minutes
- Error budget consumed: 2.3%
- **Status:** ✅ Within error budget

---

## Root Cause Analysis

### Primary Cause

**Connection Leak in Error Handling**

The API code contained a bug where database connections were not properly released when exceptions occurred during transaction processing:

```javascript
// BEFORE (Buggy code)
async function processTransaction(userId, amount) {
  const connection = await pool.getConnection();
  try {
    const result = await connection.query('INSERT INTO transactions...');
    connection.release(); // ❌ Only releases on success
    return result;
  } catch (error) {
    logger.error(error);
    throw error; // ❌ Connection not released on error
  }
}

// AFTER (Fixed code)
async function processTransaction(userId, amount) {
  const connection = await pool.getConnection();
  try {
    const result = await connection.query('INSERT INTO transactions...');
    return result;
  } catch (error) {
    logger.error(error);
    throw error;
  } finally {
    connection.release(); // ✅ Always releases connection
  }
}
```

### Contributing Factors

1. **Insufficient Connection Pool Size**
   - Configured for 100 max connections
   - Peak traffic needs ~120 connections
   - No headroom for traffic spikes

2. **Missing Connection Pool Monitoring**
   - No alerts on connection pool saturation
   - No visibility into connection leaks
   - Connection metrics not in Grafana dashboards

3. **Inadequate Load Testing**
   - Load tests simulated happy path only
   - No failure scenario testing (errors, timeouts)
   - Connection pool behavior not validated

4. **Code Review Gap**
   - Connection leak not caught in PR review
   - No automated detection in CI/CD
   - Missing linting rules for resource cleanup

---

## Resolution

### Immediate Mitigation

**Action:** Increased database connection pool size  
**Change:** 100 → 200 max connections  
**Deployment:** Emergency hotfix via fast-track pipeline  
**Time to Mitigate (TTM):** 12 minutes  
**Result:** Latency returned to normal within 5 minutes  

### Permanent Fix

**Code Fix:** Implemented proper connection cleanup in `finally` blocks  
**PR:** [#234 - Fix connection leak in transaction processing](https://github.com/vanessa/denvan-banking-api/pull/234)  
**Deployed:** January 16, 2025  
**Validation:** Load tested with error injection  

---

## What Went Well

✅ **Fast Detection (< 1 minute)**
- Prometheus alert fired immediately
- SLO-based alerting worked as designed

✅ **Clear Incident Response**
- Runbook provided step-by-step guidance
- On-call engineer followed established procedures

✅ **Quick Mitigation (12 minutes)**
- Emergency change process worked smoothly
- Fast-track deployment pipeline functioned correctly

✅ **No Data Loss**
- Database integrity maintained
- All transactions eventually processed

✅ **Effective Communication**
- Incident Slack channel created immediately
- Status page updated promptly
- Stakeholders kept informed

---

## What Went Wrong

❌ **Connection Leak Not Detected**
- Bug existed in production for 3 weeks
- Not caught by code review
- No automated leak detection

❌ **Insufficient Load Testing**
- Load tests only simulated success scenarios
- Failure paths not validated
- Connection pool behavior untested

❌ **Missing Observability**
- No connection pool metrics exposed
- Connection saturation not visible
- No early warning of leak

❌ **Conservative Resource Limits**
- Connection pool sized for average load
- No headroom for traffic spikes
- Capacity planning assumptions incorrect

---

## Lessons Learned

### Technical Lessons

1. **Always use `finally` blocks for resource cleanup**
   - Applies to database connections, file handles, locks
   - Must handle both success and error paths

2. **Connection pool sizing needs headroom**
   - Size for peak traffic + 50% buffer
   - Account for transient errors and retries

3. **Observability must cover resource saturation**
   - Monitor connection pools, memory, threads
   - Alert on saturation before exhaustion

4. **Load tests must simulate failures**
   - Test error handling under load
   - Validate resource cleanup during failures

### Process Lessons

1. **Code review checklists should include resource management**
   - Explicit check for connection/resource cleanup
   - Verify `finally` blocks for critical resources

2. **CI/CD should detect resource leaks**
   - Add leak detection to test suite
   - Fail builds on resource leaks

3. **Capacity planning needs failure scenarios**
   - Model resource usage during degraded states
   - Account for retry storms and backoff

---

## Action Items

### Immediate (Week 1)

| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| Deploy connection leak fix to production | Backend | Jan 16 | ✅ Done |
| Add connection pool metrics to Prometheus | SRE | Jan 17 | ✅ Done |
| Create Grafana dashboard for connection health | SRE | Jan 17 | ✅ Done |
| Add connection saturation alert | SRE | Jan 17 | ✅ Done |

### Short-term (Month 1)

| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| Update load tests to include error scenarios | QA | Jan 22 | 🟡 In Progress |
| Implement auto-scaling connection pool | Backend | Jan 30 | 🟡 In Progress |
| Add code review checklist for resource management | Engineering | Jan 25 | ✅ Done |
| Document connection pool sizing guidelines | SRE | Jan 31 | 🟡 In Progress |

### Long-term (Quarter 1)

| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| Implement connection leak detection in CI | DevOps | Feb 5 | ⬜ Planned |
| Add static analysis for resource leaks | DevOps | Feb 15 | ⬜ Planned |
| Review all error handling for resource leaks | Backend | Feb 28 | ⬜ Planned |
| Chaos engineering: regular connection pool failures | SRE | Mar 15 | ⬜ Planned |

---

## Supporting Data

### Metrics

**Before Incident (Normal):**
- Requests/sec: 450 avg, 800 peak
- Latency p95: 180ms
- Latency p99: 350ms
- Error rate: 0.01%
- DB connections: 60-80 avg

**During Incident (Degraded):**
- Requests/sec: 750 (peak traffic)
- Latency p95: 3,200ms
- Latency p99: 5,800ms
- Error rate: 0.3%
- DB connections: 100/100 (saturated)

**After Mitigation (Recovered):**
- Requests/sec: 750 (same peak traffic)
- Latency p95: 210ms
- Latency p99: 380ms
- Error rate: 0.01%
- DB connections: 85-95 avg

### Graphs

![Latency During Incident](../assets/2025-01-15-latency-graph.png)  
![Connection Pool Saturation](../assets/2025-01-15-connections.png)  
![Error Rate Spike](../assets/2025-01-15-errors.png)

---

## References

- [Incident Report](../incidents/2025-01-15-database-slowdown.md)
- [GitHub Issue #156](https://github.com/vanessa/denvan-banking-web/issues/156)
- [Fix PR #234](https://github.com/vanessa/denvan-banking-api/pull/234)
- [Runbook: Database Connection Issues](../runbooks/database-connection-issues.md)
- [SLO Definitions](../slo/definitions.yaml)

---

## Approval

**Reviewed by:**
- Vanessa Awo, SRE Lead
- Backend Engineering Team
- Engineering Manager

**Approved:** January 16, 2025

---

*This postmortem follows the blameless postmortem process. The goal is learning and improvement, not assigning fault.*
```

---

## 🎯 SLO Definitions

**File:** `denvan-banking-api/sre/slo/availability-slo.yaml`

```yaml
# Service Level Objectives for Denvan Banking API

slos:
  - name: api-availability
    description: Availability of the banking API
    sli:
      metric: successful_requests / total_requests
      measurement_window: 30d
    target: 99.9%
    error_budget: 0.1%  # 43 minutes per month
    alert_burn_rate:
      - window: 1h
        threshold: 14.4  # Burns 2% of budget
      - window: 6h
        threshold: 6     # Burns 5% of budget
    
  - name: api-latency-p95
    description: 95th percentile API latency
    sli:
      metric: request_duration_seconds{quantile="0.95"}
      measurement_window: 30d
    target: 200ms
    error_budget_policy: requests_exceeding_threshold
    
  - name: api-latency-p99
    description: 99th percentile API latency
    sli:
      metric: request_duration_seconds{quantile="0.99"}
      measurement_window: 30d
    target: 500ms
    error_budget_policy: requests_exceeding_threshold

  - name: api-error-rate
    description: Error rate for API requests
    sli:
      metric: error_requests / total_requests
      measurement_window: 30d
    target: 0.1%  # 99.9% success rate
    error_budget: 0.1%
```

---

## 📖 Sample Runbook

**File:** `denvan-banking-web/sre/runbooks/high-latency.md`

```markdown
# Runbook: High API Latency

**Alert:** `api_latency_p95_high`  
**Severity:** SEV-2  
**On-call Action:** Investigate immediately

---

## Symptoms

- Prometheus alert: `api_latency_p95_high` firing
- Grafana dashboard showing elevated latency
- User complaints of slow responses
- PagerDuty notification

---

## Step 1: Verify the Alert (2 min)

1. Check Grafana API dashboard:
   - [https://grafana.denvan.com/d/api-overview](https://grafana.denvan.com/d/api-overview)
   
2. Verify current latency:
   ```
   Latency p95: _____ ms (normal: < 200ms)
   Latency p99: _____ ms (normal: < 500ms)
   ```

3. Check if alert is real or false positive:
   - ✅ Real: p95 > 500ms for 5+ minutes
   - ❌ False: brief spike, already recovering

**If false positive:** Acknowledge alert, no further action  
**If real issue:** Continue to Step 2

---

## Step 2: Assess Impact (3 min)

Check affected components:

1. **Traffic volume:**
   ```
   Current req/sec: _____
   Normal req/sec: ~450
   ```

2. **Error rate:**
   ```
   Current errors: _____%
   Normal errors: 0.01%
   ```

3. **Affected endpoints:**
   - [ ] All endpoints
   - [ ] Specific endpoint: _______

4. **Affected users:**
   - Estimate: _____ users
   - Geography: _______

---

## Step 3: Check Common Causes (5 min)

### Database

1. Check database metrics:
   ```bash
   # CloudWatch RDS metrics
   - CPU: _____%
   - Connections: _____/100
   - Query time: _____ ms
   ```

2. If connections saturated (> 90):
   - See: [Database Connection Issues](./database-connection-issues.md)

3. If CPU high (> 80%):
   - Check slow query log
   - Consider read replica failover

### External Dependencies

1. Check downstream services:
   ```bash
   # Service health
   - Payment Gateway: _____
   - Auth Service: _____
   - Fraud Detection: _____
   ```

2. If dependency down:
   - Verify circuit breaker activated
   - Check fallback behavior
   - See: [Dependency Failure](./dependency-down.md)

### Kubernetes Pods

1. Check pod health:
   ```bash
   kubectl get pods -n denvan-banking
   kubectl top pods -n denvan-banking
   ```

2. Look for:
   - [ ] CrashLoopBackOff pods
   - [ ] High CPU/memory usage
   - [ ] Pending pods (resource limits)

3. If pod issues:
   - See: [Pod Troubleshooting](./pod-issues.md)

---

## Step 4: Immediate Mitigation

### Option A: Scale Up (if resource constrained)

```bash
# Increase replicas
kubectl scale deployment denvan-banking-api --replicas=10

# Verify scaling
kubectl get pods -n denvan-banking -w
```

### Option B: Restart Pods (if memory leak suspected)

```bash
# Rolling restart
kubectl rollout restart deployment/denvan-banking-api

# Monitor progress
kubectl rollout status deployment/denvan-banking-api
```

### Option C: Rollback (if recent deployment)

```bash
# Check recent deployments
kubectl rollout history deployment/denvan-banking-api

# Rollback to previous version
kubectl rollout undo deployment/denvan-banking-api

# Verify rollback
kubectl rollout status deployment/denvan-banking-api
```

---

## Step 5: Verify Resolution (3 min)

1. Check Grafana dashboard
   - Latency returning to normal?
   - Error rate decreasing?

2. Verify metrics:
   ```
   p95 latency: _____ ms (target: < 200ms)
   Error rate: ____% (target: < 0.1%)
   ```

3. If **resolved:**
   - Update incident Slack channel
   - Continue monitoring for 15 minutes
   - Document actions taken

4. If **not resolved:**
   - Escalate to senior SRE
   - Continue to Step 6

---

## Step 6: Deep Investigation

If issue persists after basic troubleshooting:

1. **Collect diagnostics:**
   ```bash
   # Pod logs
   kubectl logs -n denvan-banking deployment/denvan-banking-api --tail=1000
   
   # Describe pods
   kubectl describe pods -n denvan-banking
   
   # Database logs
   aws logs tail /aws/rds/denvan-banking/postgresql --follow
   ```

2. **Check distributed traces:**
   - Open Jaeger: [https://jaeger.denvan.com](https://jaeger.denvan.com)
   - Search for slow traces (> 1s)
   - Identify bottleneck service

3. **Check application metrics:**
   - Heap usage
   - Thread pool saturation
   - Connection pool usage

---

## Communication

### Internal Communication

1. **Create Slack incident channel:**
   ```
   #incident-YYYY-MM-DD-api-latency
   ```

2. **Post initial update:**
   ```
   🚨 Investigating high API latency
   Current p95: XXXms (normal: 180ms)
   Impact: ~XXXX users affected
   Status: Investigating
   ```

3. **Provide updates every 15 minutes**

### External Communication

If impact > 30 minutes:

1. Update status page:
   - [https://status.denvan.com](https://status.denvan.com)
   
2. Email template:
   ```
   Subject: Denvan Banking - Performance Issues
   
   We are currently experiencing elevated latency 
   affecting API requests. Our team is actively 
   investigating and working on a resolution.
   
   We will provide updates every 30 minutes.
   ```

---

## Post-Incident

After resolution:

1. **Update incident ticket:**
   - Root cause
   - Mitigation actions
   - Time to resolution

2. **Schedule postmortem:**
   - If SEV-1 or SEV-2: within 24 hours
   - If SEV-3: within 3 days

3. **Create action items:**
   - Preventive measures
   - Monitoring improvements
   - Documentation updates

---

## Related Resources

- [Database Connection Issues](./database-connection-issues.md)
- [Deployment Rollback](./deployment-rollback.md)
- [Incident Response Process](../docs/operations/incident-management.md)
- [SLO Definitions](../slo/definitions.yaml)
- [Grafana Dashboard](https://grafana.denvan.com/d/api-overview)
```

---

*This is Part 1 of the implementation guide. Would you like me to continue with:*
- Part 2: Complete GitHub Actions workflows
- Part 3: Terraform infrastructure code
- Part 4: Portfolio website implementation
- Part 5: More incident scenarios and postmortems?

Let me know what you need next!
