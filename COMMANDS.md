# Command Reference Guide

Quick reference for all commands you'll need for development and deployment.

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Or with pnpm
pnpm install
```

## 🔧 Development

```bash
# Start development server
npm run dev

# Start development server (pnpm)
pnpm dev

# Access at: http://localhost:5173
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Build for production (pnpm)
pnpm build

# Output directory: dist/
```

## 👀 Preview

```bash
# Preview production build locally
npm run preview

# Preview production build (pnpm)
pnpm preview

# Access at: http://localhost:4173
```

## 🚀 Deployment

### GitHub Pages (Automated)

```bash
# Just push to main branch - automatic deployment!
git add .
git commit -m "Your commit message"
git push
```

### Manual Deployment

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

## 🗄️ Git Commands

### Initial Setup

```bash
# Initialize Git repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Regular Updates

```bash
# Check status
git status

# Add changed files
git add .
# Or add specific file
git add filename.tsx

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Branch Management

```bash
# Create new branch
git checkout -b feature/new-feature

# Switch to branch
git checkout branch-name

# List all branches
git branch

# Merge branch into main
git checkout main
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature
```

## 🔍 Checking & Debugging

### Check Versions

```bash
# Node.js version
node --version

# npm version
npm --version

# Git version
git --version

# Check if dependencies are installed
npm list --depth=0
```

### View Build Output

```bash
# Build and see detailed output
npm run build -- --debug

# Check bundle size
npm run build
# Look for "dist/assets/*.js" file sizes
```

### Preview Build Locally

```bash
# Build first
npm run build

# Then preview
npm run preview

# Open http://localhost:4173
# Test all features in production mode
```

## 🧹 Cleanup

```bash
# Remove node_modules
rm -rf node_modules

# Remove build output
rm -rf dist

# Remove both and reinstall
rm -rf node_modules dist
npm install
```

### Windows PowerShell

```powershell
# Remove node_modules
Remove-Item -Recurse -Force node_modules

# Remove build output
Remove-Item -Recurse -Force dist

# Remove both
Remove-Item -Recurse -Force node_modules, dist
```

## 📊 Package Management

### Install New Package

```bash
# Install package
npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Install specific version
npm install package-name@1.2.3
```

### Update Packages

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name
```

### Remove Package

```bash
# Uninstall package
npm uninstall package-name

# Uninstall dev dependency
npm uninstall --save-dev package-name
```

## 🔐 Supabase Commands

### In Supabase SQL Editor

```sql
-- Check if tables exist
SELECT tablename FROM pg_tables WHERE schemaname = 'public';

-- Count users
SELECT COUNT(*) FROM users;

-- Count reports
SELECT COUNT(*) FROM reports;

-- View recent reports
SELECT * FROM reports ORDER BY created_at DESC LIMIT 10;

-- View all users
SELECT * FROM users;

-- Check user's eco points
SELECT name, eco_points, credits FROM users WHERE email = 'user@example.com';
```

## 📱 Testing Commands

### Browser Console

```javascript
// Check Supabase connection
import { supabase } from './src/app/utils/supabase';
const { data, error } = await supabase.from('users').select('count');
console.log('Users count:', data);

// Check localStorage (old data)
console.log(localStorage.getItem('smart_rubbish_users'));

// Clear localStorage
localStorage.clear();

// Check current auth state
import { getCurrentAuthUser } from './src/app/utils/cloudStorage';
const user = await getCurrentAuthUser();
console.log('Current user:', user);
```

## 🌐 URL Commands

### Local URLs

```
Development:        http://localhost:5173
Production Preview: http://localhost:4173
```

### GitHub URLs

```
Repository:  https://github.com/YOUR_USERNAME/YOUR_REPO
Actions:     https://github.com/YOUR_USERNAME/YOUR_REPO/actions
Settings:    https://github.com/YOUR_USERNAME/YOUR_REPO/settings
Pages:       https://github.com/YOUR_USERNAME/YOUR_REPO/settings/pages
Live Site:   https://YOUR_USERNAME.github.io/YOUR_REPO/
```

### Supabase URLs

```
Dashboard:   https://supabase.com/dashboard
SQL Editor:  https://supabase.com/dashboard/project/YOUR_PROJECT/sql
Auth:        https://supabase.com/dashboard/project/YOUR_PROJECT/auth
Tables:      https://supabase.com/dashboard/project/YOUR_PROJECT/editor
```

## 🔄 Workflow Commands

### Complete Development Cycle

```bash
# 1. Start development
npm run dev

# 2. Make changes to code
# ... edit files ...

# 3. Test locally
# Open http://localhost:5173 and test

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview

# 6. Commit changes
git add .
git commit -m "Description of changes"

# 7. Push to GitHub (auto-deploys!)
git push

# 8. Wait 2-3 minutes, then check live site
# https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## 🐛 Troubleshooting Commands

### Port Already in Use

```bash
# Kill process on port 5173 (Mac/Linux)
lsof -ti:5173 | xargs kill -9

# Windows
netstat -ano | findstr :5173
# Note the PID, then:
taskkill /PID <PID> /F
```

### Clear npm Cache

```bash
# Clear cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Fix Git Issues

```bash
# Reset to last commit (DANGER: loses changes)
git reset --hard HEAD

# Undo last commit (keeps changes)
git reset --soft HEAD~1

# View commit history
git log --oneline

# View remote URL
git remote -v

# Change remote URL
git remote set-url origin NEW_URL
```

## 📋 Quick Shortcuts

### Development

| Action | Command |
|--------|---------|
| Start dev server | `npm run dev` |
| Stop dev server | `Ctrl + C` |
| Open in browser | `o` (in Vite terminal) |
| Clear console | `Ctrl + L` |

### Git

| Action | Command |
|--------|---------|
| Status | `git status` |
| Stage all | `git add .` |
| Commit | `git commit -m "message"` |
| Push | `git push` |
| Pull | `git pull` |

### npm

| Action | Command |
|--------|---------|
| Install | `npm install` |
| Install package | `npm i package-name` |
| Uninstall | `npm uninstall package-name` |
| Update | `npm update` |
| List packages | `npm list --depth=0` |

## 🎯 Common Workflows

### Feature Development

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and test
npm run dev

# Commit changes
git add .
git commit -m "Add my feature"

# Push feature branch
git push -u origin feature/my-feature

# Create Pull Request on GitHub
# After approval, merge to main
```

### Bug Fix

```bash
# Create fix branch
git checkout -b fix/bug-description

# Fix the bug
# Test thoroughly
npm run dev

# Build and preview
npm run build
npm run preview

# Commit
git add .
git commit -m "Fix: description of bug fix"

# Push
git push

# Or merge to main and push
git checkout main
git merge fix/bug-description
git push
```

### Quick Update

```bash
# Make small change
# Test
npm run dev

# Commit and push
git add .
git commit -m "Update: brief description"
git push

# Done! Auto-deploys in 2-3 minutes
```

## 📚 Help Commands

```bash
# npm help
npm help

# Git help
git help

# Vite help
npx vite --help

# View package info
npm info package-name

# View package versions
npm view package-name versions
```

## 🎓 Learning Commands

```bash
# See what a command does without running it
git diff                    # See changes before committing
git log                     # View commit history
git show HEAD              # See last commit
npm list                   # See installed packages
npm outdated              # See which packages can be updated
```

---

## 🔖 Bookmark This Page!

Keep this reference handy for quick command lookup during development.

**Pro Tip**: Use `Ctrl+F` to quickly find commands on this page!

---

**Last Updated**: February 26, 2026  
**For**: Smart Rubbish Detection System  
**Platform**: GitHub Pages + Supabase
