# GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Choose a repository name:
   - For personal site: `yourusername.github.io` (this will be accessible at `https://yourusername.github.io`)
   - For project site: `portfolio` or any name (will be at `https://yourusername.github.io/portfolio`)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click **uploading an existing file**
2. Drag and drop `portfolio.html` (or click to select it)
3. Rename the file from `portfolio.html` to `index.html` (important!)
4. Scroll down and click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to where you want to store your project
cd ~/Documents

# Clone your repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Copy your portfolio file and rename it to index.html
cp /path/to/portfolio.html index.html

# Add, commit, and push
git add index.html
git commit -m "Initial portfolio deployment"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Branch: **main** (or **master**)
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Live Site

Your site will be live at:
- Personal site: `https://yourusername.github.io`
- Project site: `https://yourusername.github.io/repository-name`

---

## Customization Checklist

Before deploying, customize these sections in your `index.html`:

### 1. Personal Information
- [ ] Hero section: Name and title
- [ ] Hero description
- [ ] Stats bar numbers (years, projects, uptime)

### 2. Contact Information
- [ ] Email address (search for `your.email@example.com`)
- [ ] LinkedIn URL (search for `linkedin.com/in/yourprofile`)
- [ ] GitHub URL (search for `github.com/yourusername`)
- [ ] Social media links in footer

### 3. Experience Section
- [ ] Update company names
- [ ] Update job titles
- [ ] Update years/dates
- [ ] Update descriptions

### 4. Projects Section
- [ ] Replace with your actual projects
- [ ] Update descriptions
- [ ] Update technology tags
- [ ] Add project links (GitHub repos, live demos)

### 5. Expertise Section
- [ ] Adjust skills to match your experience
- [ ] Update technology tags
- [ ] Modify descriptions

---

## Custom Domain (Optional)

Want to use your own domain like `www.yourname.com`?

1. Buy a domain from Namecheap, Google Domains, etc.
2. In your repository, create a file named `CNAME` (no extension)
3. Add your domain: `www.yourname.com`
4. In your domain registrar's DNS settings, add:
   - **A Record**: Points to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME Record**: `www` points to `yourusername.github.io`
5. Wait for DNS propagation (can take up to 48 hours)

---

## Updating Your Site

Whenever you want to update your portfolio:

**Via Web Interface:**
1. Go to your repository on GitHub
2. Click on `index.html`
3. Click the pencil icon (Edit)
4. Make your changes
5. Click **Commit changes**
6. Changes go live in 1-2 minutes

**Via Git:**
```bash
# Make changes to index.html locally
# Then:
git add index.html
git commit -m "Updated portfolio content"
git push origin main
```

---

## Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes after enabling GitHub Pages
- Make sure file is named `index.html` (not `portfolio.html`)
- Check that repository is Public
- Verify GitHub Pages is enabled in Settings → Pages

**Changes not appearing?**
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 1-2 minutes for GitHub to rebuild
- Check the Actions tab for deployment status

**404 Error?**
- Ensure the file is named `index.html`
- Make sure it's in the root directory (not in a folder)

---

## Pro Tips

1. **Use branches for testing**: Create a `dev` branch to test changes before merging to `main`
2. **Enable Actions**: See deployment status in the Actions tab
3. **Add README**: Create a `README.md` describing your portfolio
4. **Analytics**: Add Google Analytics to track visitors
5. **SEO**: Add meta tags for better search engine visibility

---

## Additional Features to Add Later

### Google Analytics
Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### SEO Meta Tags
Add in `<head>` section:
```html
<meta name="description" content="Site Reliability Engineer & Cloud Platform Expert with 8+ years experience">
<meta name="keywords" content="SRE, Cloud Engineer, DevOps, AWS, Kubernetes">
<meta property="og:title" content="Your Name - SRE Portfolio">
<meta property="og:description" content="Site Reliability Engineer specializing in cloud infrastructure">
<meta property="og:image" content="https://yourusername.github.io/preview-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### Favicon
Add in `<head>` section:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

---

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Markdown Guide](https://www.markdownguide.org/) for README

---

**🚀 Ready to deploy? Start with Step 1 above!**
