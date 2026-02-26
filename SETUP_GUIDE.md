# Complete Setup Guide

This guide will walk you through setting up the Smart Rubbish Detection System from scratch.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js) or **pnpm** (recommended)
   - npm comes with Node.js
   - Install pnpm: `npm install -g pnpm`
   - Verify: `npm --version` or `pnpm --version`

3. **Git**
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

4. **A Code Editor** (recommended)
   - VS Code: https://code.visualstudio.com/
   - Or any editor of your choice

### Optional
- **GitHub Account** (for deployment)
- **Modern Web Browser** (Chrome, Firefox, Safari, or Edge)

---

## Part 1: Local Development Setup

### Step 1: Get the Code

#### Option A: Clone from GitHub (if already published)
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

#### Option B: Start Fresh (if not yet published)
```bash
# Create a new directory
mkdir smart-rubbish-sydney
cd smart-rubbish-sydney

# Initialize git
git init
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# OR using pnpm (faster, recommended)
pnpm install
```

This will install all required packages listed in `package.json`.

**Installation time**: 2-5 minutes depending on your internet speed.

### Step 3: Start Development Server

```bash
# Using npm
npm run dev

# OR using pnpm
pnpm dev
```

You should see output like:
```
VITE v6.3.5  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 4: Open in Browser

1. Open your browser
2. Navigate to: `http://localhost:5173`
3. You should see the landing page!

**🎉 Congratulations! Your local development environment is set up.**

### Step 5: Test the Application

1. **Register a new account**
   - Click "Register" button
   - Fill in email and password
   - Submit the form

2. **Login as admin**
   - Email: `admin1@sydney.gov.au`
   - Password: `Admin@123`

3. **Create a report**
   - Go to "Report Rubbish"
   - Allow location access (or manually pin location)
   - Fill in the form
   - Submit

4. **View on heat map**
   - Check the map for your report
   - Click markers to see details

---

## Part 2: GitHub Setup

### Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click the "+" icon → "New repository"
3. Repository settings:
   - **Name**: `smart-rubbish-sydney` (or your choice)
   - **Description**: "Smart Rubbish Detection System for Sydney"
   - **Visibility**: Public
   - **DO NOT** check "Initialize with README" (we have one)
4. Click "Create repository"

### Step 2: Connect Local Project to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Verify remote
git remote -v
```

### Step 3: Prepare for First Commit

```bash
# Check what files will be committed
git status

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Smart Rubbish Detection System v1.0.0"
```

### Step 4: Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

**🎉 Your code is now on GitHub!**

---

## Part 3: Deploy to GitHub Pages

### Step 1: Configure Repository Settings

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. No need to save - it auto-saves

### Step 2: Update Base Path (IMPORTANT!)

You need to tell the app what the GitHub Pages URL will be.

**Edit `.github/workflows/deploy.yml`:**

Find this section:
```yaml
- name: Build
  run: pnpm run build
  env:
    NODE_ENV: production
```

Add your repository name:
```yaml
- name: Build
  run: pnpm run build
  env:
    NODE_ENV: production
    VITE_BASE: /YOUR_REPO_NAME/  # Add this line!
```

Replace `YOUR_REPO_NAME` with your actual repository name.

**Example:** If your repo is `smart-rubbish-sydney`, use:
```yaml
VITE_BASE: /smart-rubbish-sydney/
```

### Step 3: Commit and Push Changes

```bash
git add .github/workflows/deploy.yml
git commit -m "Configure base path for GitHub Pages"
git push origin main
```

### Step 4: Wait for Deployment

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. You'll see the deployment workflow running
4. Wait for it to complete (usually 2-3 minutes)
5. Green checkmark = Success!

### Step 5: Access Your Live Site

1. Go to "Settings" → "Pages"
2. You'll see: "Your site is live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`"
3. Click the link!

**🎉 Your app is now live on the internet!**

---

## Part 4: Making Updates

### Local Development Workflow

1. **Make changes** to your code
2. **Test locally**:
   ```bash
   npm run dev
   ```
3. **Build to verify** (optional):
   ```bash
   npm run build
   npm run preview
   ```

### Deploy Updates to GitHub Pages

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

3. **Automatic deployment**: GitHub Actions will automatically rebuild and deploy!

4. **Wait 2-3 minutes** for deployment

5. **Refresh your browser** to see updates

---

## Troubleshooting

### Issue: npm install fails

**Solutions**:
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Try using `pnpm` instead: `pnpm install`

### Issue: Port 5173 already in use

**Solutions**:
- Stop the other process using the port
- Or use a different port: `npm run dev -- --port 3000`

### Issue: Can't push to GitHub (authentication)

**Solutions**:
- Configure Git credentials:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```
- Use GitHub CLI for easier authentication: https://cli.github.com/

### Issue: GitHub Pages shows 404

**Solutions**:
- Check that `VITE_BASE` is set correctly in workflow
- Verify GitHub Pages is enabled in settings
- Check the Actions tab for deployment errors
- Wait 5-10 minutes for DNS propagation

### Issue: Routes don't work on GitHub Pages

**Solutions**:
- Ensure `404.html` exists in `/public` folder
- Verify the redirect script in `index.html`
- Check that base path is configured correctly

### Issue: Map not loading

**Solutions**:
- Check internet connection (Leaflet uses CDN)
- Open browser console (F12) to see errors
- Verify Leaflet CSS is loaded in `index.html`

### Issue: Data not persisting

**Solutions**:
- Check browser's LocalStorage in DevTools
- Verify no browser extensions are blocking storage
- Try in incognito/private mode
- Check browser storage quota

---

## Development Tools

### VS Code Extensions (Recommended)

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **ESLint**
4. **Prettier - Code formatter**
5. **GitLens**

### Browser Extensions (Recommended)

1. **React Developer Tools**
2. **Redux DevTools** (if using Redux)

### Useful Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for dependency updates
npm outdated

# Update dependencies (carefully!)
npm update
```

---

## Next Steps

1. ✅ Read [README.md](README.md) for complete documentation
2. ✅ Check [QUICK_START.md](QUICK_START.md) for rapid testing
3. ✅ Review [CONTRIBUTING.md](CONTRIBUTING.md) if you want to contribute
4. ✅ See [ADMIN_GUIDE.md](ADMIN_GUIDE.md) for admin features

---

## Support

### Contact the Team

- **Nazmus Sakib** (Project Leader): s8116515@live.vu.edu.au
- **Md Abudozana Niloy**: s8138202@live.vu.edu.au
- **Suvekshya Shrestha**: s8103527@live.vu.edu.au
- **Bisesta Shah**: s8103504@live.vu.edu.au

### Resources

- [GitHub Repository Issues](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues)
- [GitHub Discussions](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/discussions)

---

**Built with ❤️ for a cleaner Sydney**

Last Updated: February 2026
