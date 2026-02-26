# Pre-Deployment Checklist

Complete this checklist before deploying to GitHub Pages to ensure a smooth deployment.

## ✅ Code Quality

### Build & Test

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` - app works locally
- [ ] Run `npm run build` - builds without errors
- [ ] Run `npm run preview` - production build works
- [ ] No TypeScript errors in terminal
- [ ] No console errors in browser DevTools
- [ ] All warnings addressed or documented

### Feature Testing

- [ ] **Landing Page**
  - [ ] Hero section displays correctly
  - [ ] Statistics show placeholder numbers
  - [ ] "Get Started" button navigates to auth
  - [ ] "Learn More" scrolls to features
  - [ ] Footer links work
  - [ ] Mobile hamburger menu works

- [ ] **Authentication**
  - [ ] User registration works
  - [ ] User login works
  - [ ] Admin login works (admin1@sydney.gov.au / Admin@123)
  - [ ] Logout works
  - [ ] Password validation works
  - [ ] Email validation works
  - [ ] Error messages display correctly
  - [ ] Success messages display

- [ ] **Dashboard (User)**
  - [ ] Shows user name and email
  - [ ] Displays eco points
  - [ ] Displays credits ($1 per 100 points)
  - [ ] Recent reports list displays
  - [ ] Quick stats visible
  - [ ] Sidebar navigation works
  - [ ] Notifications bell shows count
  - [ ] Mobile responsive

- [ ] **Report Rubbish**
  - [ ] Form displays correctly
  - [ ] "Use My Location" button works (asks permission)
  - [ ] Manual map pinpoint works
  - [ ] Address auto-fills from coordinates
  - [ ] Type dropdown has options
  - [ ] Description textarea works (min 10 chars)
  - [ ] Photo upload works (optional)
  - [ ] Submit button saves report
  - [ ] Success message appears
  - [ ] Eco points increase by 10
  - [ ] Report appears on heat map immediately

- [ ] **Heat Map**
  - [ ] Map centers on Sydney CBD (-33.8688, 151.2093)
  - [ ] 12 sample points visible (if sample data loaded)
  - [ ] Can zoom in/out
  - [ ] Can pan around
  - [ ] Clicking marker shows popup
  - [ ] Marker colors indicate status
  - [ ] Mobile map works (touch gestures)

- [ ] **Admin Dashboard**
  - [ ] Only accessible to admin users
  - [ ] Shows all reports from all users
  - [ ] Shows all users list
  - [ ] Can change report status
  - [ ] User statistics display
  - [ ] Can view report details
  - [ ] Mobile responsive

- [ ] **Notifications**
  - [ ] Bell icon shows unread count
  - [ ] Clicking opens notification panel
  - [ ] Notifications display correctly
  - [ ] Can mark as read
  - [ ] "Mark all as read" works
  - [ ] Updates when admin changes report status

- [ ] **About & Awareness Pages**
  - [ ] Content loads correctly
  - [ ] Images display (if any)
  - [ ] Links work
  - [ ] Mobile responsive

## 🗄️ Supabase Configuration

### Database Setup

- [ ] Supabase project created
- [ ] Migration SQL executed (`001_initial_schema.sql`)
- [ ] Tables created:
  - [ ] `users` table exists
  - [ ] `reports` table exists
  - [ ] `notifications` table exists
- [ ] Indexes created
- [ ] RLS policies active
- [ ] `award_eco_points()` function created

### Authentication

- [ ] Email provider enabled in Supabase
- [ ] Email confirmation disabled (for demo) or configured
- [ ] Auth settings configured
- [ ] Test user can register
- [ ] Test user can login
- [ ] Sessions persist across page refreshes

### Testing Cloud Features

- [ ] Register new user - saves to Supabase `users` table
- [ ] Login works - retrieves from Supabase
- [ ] Submit report - saves to Supabase `reports` table
- [ ] Eco points update in database
- [ ] Multi-device test: Login on different browser, see same data
- [ ] Logout works - clears session
- [ ] Admin can see all users' reports

## 📱 Responsive Design

### Mobile (< 768px)

- [ ] Hamburger menu appears
- [ ] Navigation works
- [ ] Forms are usable
- [ ] Buttons are tappable (min 44x44px)
- [ ] Text is readable
- [ ] Map works with touch gestures
- [ ] No horizontal scrolling

### Tablet (768px - 1024px)

- [ ] Layout adapts appropriately
- [ ] Sidebar behavior correct
- [ ] Forms sized well
- [ ] Map displays correctly

### Desktop (> 1024px)

- [ ] Full layout displays
- [ ] Sidebar always visible
- [ ] Two-column layouts work
- [ ] Map size appropriate

## 🔒 Security

### Data Protection

- [ ] Passwords NOT stored in plain text (Supabase handles this)
- [ ] No sensitive data in console logs
- [ ] API keys safe:
  - [ ] Anon key only (not service role key)
  - [ ] No private keys in code
- [ ] User input sanitized
- [ ] SQL injection protected (Supabase handles this)
- [ ] XSS protection in place

### Row Level Security

- [ ] Users can only see their own reports
- [ ] Users can only see their own profile
- [ ] Admins can see all data
- [ ] Non-authenticated users redirected to login

## 📂 Files & Configuration

### Required Files Present

- [ ] `package.json` with all dependencies
- [ ] `vite.config.ts` configured correctly
- [ ] `.gitignore` includes `node_modules`, `dist`, `.env`
- [ ] `.github/workflows/deploy.yml` present
- [ ] `README.md` updated with project info
- [ ] `SUPABASE_SETUP.md` present
- [ ] `CLOUD_MIGRATION_GUIDE.md` present
- [ ] `GITHUB_DEPLOYMENT.md` present
- [ ] `LICENSE` file present

### Configuration Check

- [ ] `vite.config.ts` has base path setup
- [ ] GitHub Actions workflow configured
- [ ] Supabase client configured in `/src/app/utils/supabase.ts`
- [ ] Cloud storage configured in `/src/app/utils/cloudStorage.ts`
- [ ] AuthContext uses cloud storage
- [ ] All pages updated to use async cloud functions

## 📝 Documentation

### README.md

- [ ] Project description clear
- [ ] Features list complete
- [ ] Installation instructions accurate
- [ ] Technology stack listed
- [ ] Team information included
- [ ] License information present
- [ ] Contact information up to date

### Code Documentation

- [ ] Complex functions have comments
- [ ] API functions documented
- [ ] Component props documented (where needed)
- [ ] Configuration files explained

## 🚀 GitHub Preparation

### Repository Setup

- [ ] GitHub account active
- [ ] Repository name chosen
- [ ] Repository description written
- [ ] .gitignore file complete
- [ ] No sensitive data in code
- [ ] Large files handled appropriately

### Branch Strategy

- [ ] Main branch is default
- [ ] Code is in main branch (or ready to merge)
- [ ] No uncommitted changes

## 🧪 Browser Testing

Test in multiple browsers:

- [ ] **Chrome/Edge** (Chromium)
  - [ ] All features work
  - [ ] Styles render correctly
  - [ ] Maps display
  
- [ ] **Firefox**
  - [ ] All features work
  - [ ] Styles render correctly
  - [ ] Maps display

- [ ] **Safari** (if on Mac)
  - [ ] All features work
  - [ ] Styles render correctly
  - [ ] Maps display

- [ ] **Mobile Safari** (iOS)
  - [ ] Touch gestures work
  - [ ] Forms usable
  
- [ ] **Mobile Chrome** (Android)
  - [ ] Touch gestures work
  - [ ] Forms usable

## ⚡ Performance

### Load Times

- [ ] Initial page load < 3 seconds (local)
- [ ] Bundle size reasonable (check with `npm run build`)
- [ ] Images optimized
- [ ] No memory leaks (check DevTools)

### Optimization

- [ ] Code split by route (Vite handles this)
- [ ] Lazy loading implemented where appropriate
- [ ] No unused dependencies
- [ ] Production build minified

## 🌐 Deployment Configuration

### GitHub Actions

- [ ] Workflow file exists (`.github/workflows/deploy.yml`)
- [ ] Node version specified (18)
- [ ] Build command correct
- [ ] Base path uses repository name dynamically
- [ ] Permissions set correctly

### Build Output

- [ ] `npm run build` succeeds
- [ ] Dist folder contains:
  - [ ] index.html
  - [ ] Assets folder with JS/CSS
  - [ ] Images and other assets
- [ ] No build warnings (or all understood)

## 📊 Final Verification

### Production Build Test

```bash
# Build
npm run build

# Preview
npm run preview

# Open http://localhost:4173 and test everything again
```

- [ ] All features work in preview mode
- [ ] No console errors
- [ ] Assets load correctly

## 🎯 Pre-Push Checklist

Before `git push`:

- [ ] All tests passed (above)
- [ ] Code committed
- [ ] Commit message meaningful
- [ ] No debug code left in
- [ ] No TODO comments unresolved (or documented)
- [ ] Dependencies installed
- [ ] Build succeeds
- [ ] Preview works

## 📞 Support Contacts Ready

- [ ] Team contacts documented
- [ ] Support email ready
- [ ] GitHub issues template created (optional)

## 🎉 Ready to Deploy!

Once all items are checked:

1. ✅ All checkboxes above are marked
2. ✅ Production build tested
3. ✅ Supabase configured
4. ✅ Code committed to Git
5. ✅ Ready to push to GitHub

**Next Steps**:
- Follow [DEPLOY_NOW.md](DEPLOY_NOW.md) for deployment
- Or follow [GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md) for detailed guide

---

## 🐛 If Any Checkbox is Unchecked

**Don't deploy yet!** 

Fix the issues first:
1. Identify what's not working
2. Fix the issue
3. Test again
4. Re-check this list
5. When all ✅, then deploy

---

**Completed By**: _______________  
**Date**: _______________  
**Deployment Status**: ⬜ Ready | ⬜ Not Ready  

**Notes**:
_______________________________________
_______________________________________
_______________________________________

---

**Remember**: It's better to delay deployment and fix issues than to deploy broken code!

**Good luck with your deployment! 🚀**
