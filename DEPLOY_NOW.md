# 🚀 Quick Deploy to GitHub Pages

Follow these exact steps to deploy your app to GitHub Pages in 10 minutes!

## 📋 Prerequisites Check

Open your terminal and verify:

```bash
# Check Git is installed
git --version

# Check Node.js is installed
node --version

# Check npm is installed
npm --version
```

All should return version numbers. If not, install the missing software first.

## 🎯 Deployment Steps

### 1️⃣ Create GitHub Repository (3 minutes)

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `smart-rubbish-sydney` (you can choose any name)
   - **Description**: "Smart Rubbish Detection System for Sydney"
   - **Visibility**: ✅ Public (required for free GitHub Pages)
   - ⚠️ **DO NOT** check any initialization boxes
4. Click **"Create repository"**
5. **COPY** the repository URL (looks like: `https://github.com/YOUR_USERNAME/smart-rubbish-sydney.git`)

### 2️⃣ Push Code to GitHub (2 minutes)

Open terminal in your project folder and run these commands one by one:

```bash
# Initialize Git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Smart Rubbish Detection System with Supabase"

# Add your GitHub repository as remote
# ⚠️ REPLACE with YOUR repository URL from step 1
git remote add origin https://github.com/YOUR_USERNAME/smart-rubbish-sydney.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Expected output**: You should see progress bars and "Branch 'main' set up to track remote branch 'main' from 'origin'."

### 3️⃣ Enable GitHub Pages (2 minutes)

1. Go to your repository on GitHub (the URL you created in step 1)
2. Click **"Settings"** tab (top right)
3. Click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** (not "Deploy from a branch")
5. Done! No save button needed.

### 4️⃣ Wait for Deployment (3 minutes)

1. Click the **"Actions"** tab in your repository
2. You'll see **"Deploy to GitHub Pages"** workflow running (orange circle)
3. Wait for it to finish (green checkmark ✅)
4. If it fails (red X), click on it to see error logs

### 5️⃣ Access Your Live Site! 🎉

Your site is now live at:

```
https://YOUR_USERNAME.github.io/smart-rubbish-sydney/
```

**Replace**:
- `YOUR_USERNAME` with your actual GitHub username
- `smart-rubbish-sydney` with your actual repository name

## ✅ Verification Checklist

Open your live site and test:

- [ ] Landing page loads with header and hero section
- [ ] Click "Get Started" → Goes to Auth page
- [ ] Register a new account (test with fake email like test@example.com)
- [ ] After registration, redirected to Dashboard
- [ ] Dashboard shows eco points (0) and credits ($0)
- [ ] Click "Report Rubbish" in sidebar
- [ ] Map displays centered on Sydney CBD
- [ ] Click "Use My Location" button
- [ ] Fill form and submit report
- [ ] Report appears on heat map
- [ ] Eco points increase to 10
- [ ] Logout works
- [ ] Login works with same account
- [ ] Previous report still visible

## 🔄 Making Updates

After making code changes, deploy updates:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add new feature: XYZ"

# Push to GitHub (will auto-deploy!)
git push
```

Then:
1. Go to Actions tab
2. Watch the workflow run
3. Wait for green checkmark
4. Refresh your live site - changes are live! ✨

## 🐛 Common Issues & Fixes

### Issue: "Permission denied (publickey)"

**Solution**: You need to authenticate Git with GitHub

**Option A - HTTPS (Easier)**:
```bash
# Use HTTPS URL instead of SSH
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

**Option B - SSH (More secure)**:
1. [Generate SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
2. [Add to GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### Issue: "Build failed" in GitHub Actions

**Check**:
1. Click on the failed workflow run
2. Expand the failed step
3. Read the error message

**Common causes**:
- Missing dependencies: Make sure `package.json` is committed
- Syntax errors: Fix any TypeScript/JavaScript errors
- Node version: Workflow uses Node 18 (check compatibility)

### Issue: "404 - There isn't a GitHub Pages site here"

**Wait**: It can take 5-10 minutes for first deployment

**If still not working**:
1. Go to Settings → Pages
2. Verify source is set to "GitHub Actions"
3. Check Actions tab for failed deployments

### Issue: Blank white page

**Problem**: Incorrect base path

**Solution**:
1. Check your repository name
2. Update `vite.config.ts` base path if needed
3. Redeploy

### Issue: "Not found" when clicking links

**Problem**: React Router not configured for GitHub Pages

**Solution**: The app already uses hash router for GitHub Pages compatibility. If you see this issue:
1. Clear browser cache
2. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 🔗 Important Links

After deployment, bookmark these:

- **Your Live Site**: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- **GitHub Repository**: `https://github.com/YOUR_USERNAME/YOUR_REPO`
- **Actions (Deployments)**: `https://github.com/YOUR_USERNAME/YOUR_REPO/actions`
- **Settings**: `https://github.com/YOUR_USERNAME/YOUR_REPO/settings`

## 📱 Share Your Site

Share with your team:

```
🎉 Smart Rubbish Detection System is now live!

🌐 Live URL: https://YOUR_USERNAME.github.io/YOUR_REPO/
📦 GitHub: https://github.com/YOUR_USERNAME/YOUR_REPO
🔐 Admin Login: admin1@sydney.gov.au / Admin@123

Features:
✅ Cloud-based storage with Supabase
✅ Real-time reports and heat map
✅ Eco points reward system
✅ Mobile responsive design
```

## 🎓 Next Steps

1. **Set up Supabase database**:
   - Follow [SUPABASE_SETUP.md](SUPABASE_SETUP.md)
   - Run the migration SQL
   - Test cloud features

2. **Update documentation**:
   - Edit `README.md` with your actual URLs
   - Replace placeholder links

3. **Invite collaborators**:
   - Settings → Collaborators
   - Add team members

4. **Enable GitHub Discussions** (optional):
   - Settings → Features
   - Check "Discussions"

5. **Add topics** (optional):
   - Main page → About → Settings (gear icon)
   - Add: react, typescript, supabase, github-pages, sydney

## 🎁 Bonus: Custom Domain

Want `rubbish.sydney.com` instead of `github.io`?

1. Buy a domain
2. Add CNAME record pointing to `YOUR_USERNAME.github.io`
3. Settings → Pages → Custom domain
4. Enter your domain and save
5. Enable HTTPS

## 📞 Need Help?

- **Documentation**: [GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md)
- **Supabase Setup**: [SUPABASE_SETUP.md](SUPABASE_SETUP.md)
- **Cloud Migration**: [CLOUD_MIGRATION_GUIDE.md](CLOUD_MIGRATION_GUIDE.md)
- **Team Lead**: Nazmus Sakib - s8116515@live.vu.edu.au

## ⏱️ Time Estimate

- **First time**: 10-15 minutes
- **Subsequent deploys**: 30 seconds + 2-3 min build time

## 🎉 Success Indicators

You know it's working when:

✅ Green checkmark in Actions tab  
✅ Live URL loads your site  
✅ All features work on live site  
✅ Can register and login  
✅ Can submit reports  
✅ Supabase stores data in cloud  

---

**🚀 Ready? Let's deploy!**

Start with **Step 1** above and work your way down. Each step is numbered and should take the time indicated.

**Total Time**: ~10 minutes to live site! ⚡

---

**Pro Tip**: Keep this guide open in a separate window while following the steps.

**Last Updated**: February 26, 2026  
**Difficulty**: Beginner-friendly  
**Success Rate**: 99% (if you follow steps exactly)
