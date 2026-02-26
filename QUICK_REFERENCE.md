# Quick Reference Card

One-page reference for the Smart Rubbish Detection System.

---

## ⚡ 1-Minute Quick Start

```bash
# Deploy to GitHub Pages
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# Enable GitHub Pages: Settings → Pages → Source: GitHub Actions
# Wait 3 minutes → Visit: https://YOUR_USERNAME.github.io/YOUR_REPO/
```

---

## 📚 Documentation Quick Links

| Need | Document | Time |
|------|----------|------|
| **Deploy fast** | [DEPLOY_NOW.md](DEPLOY_NOW.md) | 10 min |
| **Full guide** | [GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md) | 20 min |
| **Database setup** | [SUPABASE_SETUP.md](SUPABASE_SETUP.md) | 10 min |
| **Cloud info** | [CLOUD_MIGRATION_GUIDE.md](CLOUD_MIGRATION_GUIDE.md) | 15 min |
| **Commands** | [COMMANDS.md](COMMANDS.md) | Reference |
| **Testing** | [PRE_DEPLOYMENT_CHECKLIST.md](PRE_DEPLOYMENT_CHECKLIST.md) | 30 min |
| **Overview** | [DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md) | 10 min |
| **Find docs** | [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md) | Reference |

---

## 🔧 Essential Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (localhost:5173)
npm run build           # Build for production
npm run preview         # Preview build (localhost:4173)

# Git
git status              # Check status
git add .              # Stage all changes
git commit -m "msg"    # Commit with message
git push               # Push to GitHub (auto-deploys!)

# Troubleshooting
rm -rf node_modules    # Remove dependencies
npm install            # Reinstall
npm cache clean --force # Clear npm cache
```

---

## 🌐 Important URLs

```
Local Dev:      http://localhost:5173
Preview:        http://localhost:4173
Live Site:      https://YOUR_USERNAME.github.io/YOUR_REPO/
GitHub Repo:    https://github.com/YOUR_USERNAME/YOUR_REPO
Actions:        https://github.com/YOUR_USERNAME/YOUR_REPO/actions
Supabase:       https://supabase.com/dashboard
```

---

## 🔑 Default Credentials

**Admin Accounts**:
- Email: admin1@sydney.gov.au (also admin2, admin3, admin4)
- Password: `Admin@123`

**Test User**: Create your own during registration

---

## 📁 Key Files

```
/.github/workflows/deploy.yml    # GitHub Actions workflow
/supabase/migrations/001_*.sql   # Database schema
/src/app/utils/supabase.ts      # Supabase client
/src/app/utils/cloudStorage.ts  # Cloud storage API
/vite.config.ts                 # Vite configuration
/package.json                   # Dependencies
```

---

## 🎯 Common Tasks

### Deploy for First Time
1. Create GitHub repo
2. `git push` code
3. Settings → Pages → GitHub Actions
4. Wait for green checkmark

### Update Deployed Site
```bash
git add .
git commit -m "Update"
git push
# Auto-deploys in 2-3 min
```

### Set Up Database
1. Open Supabase Dashboard
2. SQL Editor
3. Copy `/supabase/migrations/001_initial_schema.sql`
4. Run

### Test Locally
```bash
npm run build
npm run preview
# Test at http://localhost:4173
```

---

## 🐛 Quick Fixes

| Problem | Fix |
|---------|-----|
| **Build fails** | `npm ci` then `npm run build` |
| **404 on live site** | Check base path in vite.config.ts |
| **Database error** | Verify migration SQL ran |
| **Blank page** | Check browser console for errors |
| **Port in use** | `lsof -ti:5173 \| xargs kill -9` |

---

## 📊 Project Stats

- **Language**: TypeScript
- **Framework**: React 18.3.1
- **Styling**: Tailwind CSS v4
- **Backend**: Supabase
- **Hosting**: GitHub Pages
- **Build Tool**: Vite 6.3.5

---

## 🚀 Deployment Checklist

- [ ] Code builds locally
- [ ] Supabase configured
- [ ] Git repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Deployment succeeded
- [ ] Live site works
- [ ] Features tested

---

## 🎨 Features Summary

**User Features**:
- Register/Login
- Submit reports
- View heat map
- Earn eco points
- Get notifications

**Admin Features**:
- View all reports
- Manage users
- Update status
- Send notifications

**Technical**:
- Cloud database
- Real-time sync
- Mobile responsive
- Secure auth

---

## 📞 Support

**Team Lead**: Nazmus Sakib - s8116515@live.vu.edu.au

**Quick Help**:
- Deployment: [GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md)
- Database: [SUPABASE_SETUP.md](SUPABASE_SETUP.md)
- Commands: [COMMANDS.md](COMMANDS.md)

---

## 🔄 Update Workflow

```
Code → Test → Commit → Push → Auto-deploy → Live in 3 min
```

---

## 📱 Testing URLs

```
Landing:    /
Auth:       /#/auth
Dashboard:  /#/dashboard
Report:     /#/report
Admin:      /#/admin
About:      /#/about
```

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| First deployment | 15 min |
| Supabase setup | 10 min |
| Local setup | 5 min |
| Feature test | 10 min |
| Update & redeploy | 3 min |

---

## 🎓 Learning Path

1. Read [README.md](README.md) (5 min)
2. Follow [DEPLOY_NOW.md](DEPLOY_NOW.md) (10 min)
3. Set up [SUPABASE_SETUP.md](SUPABASE_SETUP.md) (10 min)
4. Test everything (10 min)
5. Start developing! 🎉

---

**Print this page for quick reference! 📄**

**Last Updated**: February 26, 2026
