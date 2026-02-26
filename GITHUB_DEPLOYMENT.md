# GitHub Pages Deployment Guide

Complete step-by-step guide to deploy your Smart Rubbish Detection System to GitHub Pages.

## 🎯 What You'll Get

- **Live URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **Automatic Deployment**: Every push to `main` branch auto-deploys
- **Free Hosting**: GitHub Pages is 100% free
- **Custom Domain**: Optional - you can add your own domain
- **HTTPS**: Automatic SSL certificate

## 📋 Prerequisites

Before you begin:

- ✅ GitHub account (create at [github.com](https://github.com))
- ✅ Git installed on your computer
- ✅ Your project code ready
- ✅ Supabase database set up (see [SUPABASE_SETUP.md](SUPABASE_SETUP.md))

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

1. **Go to GitHub** and sign in
2. **Click "New"** to create a new repository
3. **Fill in details**:
   - **Repository name**: `smart-rubbish-detection-sydney` (or your choice)
   - **Description**: "Smart Rubbish Detection System for Sydney"
   - **Visibility**: Public (required for free GitHub Pages)
   - ⚠️ **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. **Click "Create repository"**

### Step 2: Push Your Code to GitHub

Open your terminal in your project directory and run:

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Smart Rubbish Detection System"

# Add remote repository (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace**:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** (top right)
3. **Click "Pages"** (left sidebar)
4. **Under "Build and deployment"**:
   - **Source**: Select "GitHub Actions"
5. **Save** (if prompted)

That's it! GitHub Actions will automatically build and deploy your site.

### Step 4: Wait for Deployment

1. **Go to "Actions" tab** in your repository
2. **You'll see the "Deploy to GitHub Pages" workflow running**
3. **Wait for it to complete** (usually 2-3 minutes)
4. **Green checkmark** = Success! ✅

### Step 5: Access Your Live Site

Your site is now live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example:
- Username: `johndoe`
- Repo: `smart-rubbish-sydney`
- URL: `https://johndoe.github.io/smart-rubbish-sydney/`

## 🔄 Automatic Updates

Every time you push to the `main` branch, your site will automatically rebuild and deploy!

```bash
# Make changes to your code
# ...

# Commit and push
git add .
git commit -m "Update feature XYZ"
git push

# GitHub Actions will automatically deploy!
```

## 🛠️ Manual Deployment (Alternative)

If you prefer manual deployment instead of GitHub Actions:

### Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Update vite.config.ts

Set the base path to your repository name:

```typescript
export default defineConfig({
  base: '/YOUR_REPO_NAME/',
  // ... rest of config
})
```

### Deploy

```bash
npm run deploy
```

This will build and push to the `gh-pages` branch.

### Configure GitHub Pages

1. Go to Settings → Pages
2. Source: Select "Deploy from a branch"
3. Branch: Select `gh-pages` and `/root`
4. Save

## 🐛 Troubleshooting

### Issue: "404 - Page not found"

**Problem**: Base path is incorrect

**Solution**:
1. Check your repository name
2. Ensure `VITE_BASE` in GitHub Actions workflow matches your repo name:
   ```yaml
   VITE_BASE: /${{ github.event.repository.name }}/
   ```
3. Clear browser cache and try again

### Issue: "Build failed"

**Problem**: Dependencies not installing

**Solution**:
1. Check the Actions logs for specific errors
2. Make sure `package.json` is committed
3. Try running `npm ci` locally to verify dependencies

### Issue: "Blank white page"

**Problem**: Assets not loading (incorrect base path)

**Solution**:
1. Open browser DevTools → Console
2. Check for 404 errors
3. Verify `base` path in `vite.config.ts`
4. Rebuild with correct base path

### Issue: "Styles not loading"

**Problem**: CSS files not found

**Solution**:
1. Check browser DevTools → Network tab
2. Look for failed CSS requests
3. Ensure Tailwind CSS is building correctly
4. Run `npm run build` locally to test

### Issue: "Maps not displaying"

**Problem**: Leaflet CSS not loading

**Solution**:
1. Check if Leaflet CSS is imported in your components
2. Verify the import path is correct
3. Check browser console for CSS errors

### Issue: "Supabase not working"

**Problem**: Environment variables not set

**Solution**:
1. Supabase credentials are in `/utils/supabase/info.tsx`
2. These are bundled with the app (not environment variables)
3. Make sure this file is committed to Git
4. Verify Supabase project is active

## 🔒 Security Considerations

### What's Safe to Commit

✅ **Safe**:
- Supabase Project ID (public)
- Supabase Anon Key (public, safe for frontend)
- All frontend code
- Public assets

❌ **DO NOT COMMIT**:
- Supabase Service Role Key (keep secret!)
- Private API keys
- Database passwords
- Personal access tokens

### Environment Variables

For GitHub Actions, you can add secrets:

1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add your secret (name and value)
4. Reference in workflow: `${{ secrets.SECRET_NAME }}`

**Note**: For this project, all necessary credentials are already included in `/utils/supabase/info.tsx` and are safe for public use (Anon key only).

## 📊 Monitoring

### Check Deployment Status

1. **Actions Tab**: See all deployments and their status
2. **Deployment History**: Settings → Pages shows deployment history
3. **Build Logs**: Click any workflow run to see detailed logs

### Analytics (Optional)

Add Google Analytics or similar:

1. Get tracking ID
2. Add to your `index.html`
3. Track visitors and usage

## 🌐 Custom Domain (Optional)

Want to use your own domain instead of `github.io`?

### Setup Steps

1. **Buy a domain** (e.g., from Namecheap, GoDaddy)
2. **Add DNS records**:
   - Type: CNAME
   - Name: www
   - Value: `YOUR_USERNAME.github.io`
3. **In GitHub**:
   - Settings → Pages → Custom domain
   - Enter your domain (e.g., `www.yourdomain.com`)
   - Save
4. **Enable HTTPS** (recommended)
5. **Wait for DNS propagation** (up to 48 hours)

## 📱 Testing Your Deployment

### Pre-Deployment Checklist

Before pushing to GitHub, test locally:

- [ ] Run `npm run build` successfully
- [ ] Run `npm run preview` to test production build
- [ ] Test all features in preview mode
- [ ] Check responsive design on mobile
- [ ] Verify all links work
- [ ] Test authentication flows
- [ ] Submit test report
- [ ] Check heat map loads correctly

### Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at GitHub Pages URL
- [ ] All pages are accessible
- [ ] Styles are applied correctly
- [ ] Images and assets load
- [ ] Maps display correctly
- [ ] Authentication works
- [ ] Can create reports
- [ ] Can login as admin
- [ ] Notifications work
- [ ] Mobile responsive
- [ ] No console errors

## 🔄 Workflow Details

### What Happens During Deployment?

1. **Trigger**: You push to `main` branch
2. **Checkout**: GitHub Actions checks out your code
3. **Setup**: Installs Node.js and dependencies
4. **Build**: Runs `npm run build` with correct base path
5. **Upload**: Uploads build artifacts
6. **Deploy**: Deploys to GitHub Pages
7. **Live**: Your site is updated! 🎉

### Build Time

- **Typical**: 2-3 minutes
- **First deployment**: May take longer
- **Subsequent deployments**: Cached dependencies = faster

## 💡 Best Practices

### Do's ✅

- Commit often with meaningful messages
- Test locally before pushing
- Use feature branches for big changes
- Keep dependencies updated
- Monitor deployment logs
- Use semantic versioning for releases

### Don'ts ❌

- Don't commit sensitive keys
- Don't push broken code to main
- Don't force push to main
- Don't skip testing
- Don't ignore build warnings

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router GitHub Pages](https://github.com/remix-run/react-router/tree/main/examples/deploy-netlify)

## 🆘 Getting Help

### If Something Goes Wrong

1. **Check Actions logs**: Click on the failed workflow run
2. **Read error messages**: They usually tell you what's wrong
3. **Search GitHub Issues**: Someone may have had the same problem
4. **Ask for help**: Create an issue in your repository

### Support Contacts

- **Team Lead**: Nazmus Sakib - s8116515@live.vu.edu.au
- **GitHub Support**: https://support.github.com
- **Project Issues**: Create an issue in your repository

## 🎓 Next Steps After Deployment

1. ✅ Share your live URL with the team
2. ✅ Test all features on the live site
3. ✅ Update README.md with your actual URL
4. ✅ Configure custom domain (optional)
5. ✅ Set up monitoring/analytics (optional)
6. ✅ Create documentation for users
7. ✅ Announce to your community!

## 📝 Quick Reference Commands

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Commit changes
git add .
git commit -m "Your message"
git push

# Check deployment status
# Visit: https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions
```

---

## 🎉 Success!

Your Smart Rubbish Detection System is now live on GitHub Pages!

**Share your URL**:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Built with ❤️ for a cleaner, greener Sydney**

---

**Last Updated**: February 26, 2026  
**Deployment Method**: GitHub Actions  
**Status**: ✅ Ready for deployment
