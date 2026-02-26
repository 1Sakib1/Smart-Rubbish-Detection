# Deployment Guide - GitHub Pages

This guide explains how to deploy the Smart Rubbish Detection System to GitHub Pages.

## Prerequisites

- Git installed on your computer
- A GitHub account
- Node.js and npm (or pnpm) installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `smart-rubbish-sydney`)
5. Choose "Public" visibility
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Prepare Your Local Project

If you haven't already initialized git in your project:

```bash
# Initialize git repository
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit: Smart Rubbish Detection System"
```

### 3. Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### 4. Configure GitHub Pages

#### Option A: Using GitHub Actions (Recommended - Automatic Deployment)

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Click on "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "**GitHub Actions**"
5. The workflow file (`.github/workflows/deploy.yml`) is already included in the project
6. Every time you push to the `main` branch, it will automatically build and deploy

#### Option B: Manual Deployment

If you prefer manual deployment:

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update your repository settings:
   - Go to Settings → Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" and "/ (root)"
   - Click Save

3. Build and deploy:
   ```bash
   npm run deploy
   ```

### 5. Configure Base Path (Important!)

If your repository is not named exactly as your GitHub username (which it likely isn't), you need to set the base path:

1. **For GitHub Actions deployment**, update `.github/workflows/deploy.yml`:
   
   Find the "Build" step and update it to:
   ```yaml
   - name: Build
     run: pnpm run build
     env:
       NODE_ENV: production
       VITE_BASE: /YOUR_REPO_NAME/  # Add this line with your repo name
   ```

2. **For manual deployment**, build with:
   ```bash
   VITE_BASE=/YOUR_REPO_NAME/ npm run build
   npm run deploy
   ```

### 6. Access Your Deployed Site

After deployment completes (usually takes 2-3 minutes):

1. Go to your repository Settings → Pages
2. You'll see a link like: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
3. Click the link to view your live site!

### 7. Update README.md

Don't forget to update the README.md file with your actual GitHub Pages URL:

```markdown
## 🚀 Live Demo

Visit the live application: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

## Continuous Deployment

With GitHub Actions configured, your deployment workflow is:

1. Make changes to your code locally
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. GitHub Actions automatically builds and deploys your changes
5. Wait 2-3 minutes and refresh your site to see the updates!

## Troubleshooting

### Issue: Page shows 404 or routes don't work

**Solution**: Make sure you've set the correct base path in your build configuration.

### Issue: Styles or assets not loading

**Solution**: Check that the `VITE_BASE` environment variable is set correctly with your repository name.

### Issue: Build fails on GitHub Actions

**Solution**: 
1. Check the Actions tab in your repository to see the error log
2. Common issues:
   - Missing dependencies (run `pnpm install` locally to update lockfile)
   - Build errors (test `npm run build` locally first)

### Issue: LocalStorage data not persisting

**Solution**: This is expected - LocalStorage is browser-specific and persists locally. Each user will have their own data. This is by design for the demonstration.

### Issue: Maps not loading

**Solution**: Make sure you have internet connection. The Leaflet maps use CDN resources that require internet access.

## Data Persistence

All application data is stored in the browser's LocalStorage:

- **User accounts**: Stored locally in each browser
- **Rubbish reports**: Stored locally in each browser
- **Admin notifications**: Stored locally in each browser

This means:
- ✅ Data persists across page refreshes
- ✅ Data is private to each user's browser
- ❌ Data is NOT shared between different browsers or devices
- ❌ Clearing browser data will delete all stored information

**Note**: This is a demonstration application. For a production system, you would integrate a backend database service.

## Environment-Specific Configuration

The application automatically detects the environment:

- **Development** (localhost): Uses `/` as base path
- **Production** (GitHub Pages): Uses `/YOUR_REPO_NAME/` as base path (when VITE_BASE is set)

## Security Considerations

- The 4 admin accounts are hardcoded for demonstration purposes
- Passwords are hashed using SHA-256 before storage
- No sensitive data should be stored in this demonstration app
- For production use, implement proper backend authentication

## Support

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues)
2. Review the Actions logs for deployment errors
3. Contact the development team (see README.md for contacts)

---

**Last Updated**: February 2026
**Maintained By**: Smart Rubbish Detection Team
