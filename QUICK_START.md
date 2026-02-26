# Quick Start Guide

Get the Smart Rubbish Detection System running in minutes!

## 🚀 For Developers

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

### 3. Open in Browser

Navigate to: `http://localhost:5173`

That's it! You're now running the application locally.

## 📦 Building for Production

```bash
npm run build
# or
pnpm build
```

The production build will be in the `dist/` folder.

## 🌐 Deploy to GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

**Quick deploy:**

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repository settings (Settings → Pages → Source: GitHub Actions)
4. Done! Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 👤 Default Accounts

### Admin Accounts (4 fixed accounts)
- **Email**: admin1@sydney.gov.au to admin4@sydney.gov.au
- **Password**: Admin@123

### Community Members
- Register a new account at `/auth?tab=register`
- Use any email and password (stored locally)

## 🗺️ Features to Test

1. **Landing Page** (`/`)
   - View statistics and features
   - See social proof
   - Navigate to About Us

2. **Authentication** (`/auth`)
   - Register as community member
   - Login as admin or community member

3. **Dashboard** (`/dashboard`)
   - View your reports
   - Check eco points balance
   - See recent activity

4. **Report Rubbish** (`/report`)
   - Use GPS auto-detection
   - Pin location on map
   - Fill form and submit
   - Earn eco points!

5. **Heat Map**
   - View all reports on map
   - Click markers for details
   - See density visualization

6. **Admin Dashboard** (`/admin`)
   - Login as admin to access
   - Review all reports
   - Manage community reports

7. **Awareness** (`/awareness`)
   - Learn about waste management
   - View NSW environmental laws
   - Access partner resources

8. **About Us** (`/about-us`)
   - Meet the team
   - Learn about the project

## 💾 Data Storage

All data is stored in browser LocalStorage:
- User accounts
- Rubbish reports
- Eco points
- Notifications

**Note**: Data is browser-specific and will persist across sessions but not across different browsers or devices.

## 🛠️ Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── context/        # Auth context
│   │   ├── utils/          # Helper functions
│   │   └── routes.tsx      # App routing
│   ├── styles/             # CSS files
│   └── main.tsx           # Entry point
├── public/                 # Static assets
└── index.html             # HTML template
```

## 🔧 Tech Stack

- React 18.3.1
- TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- Leaflet Maps
- Motion (Framer Motion)
- LocalStorage API

## 📱 Mobile Testing

Test responsive design:
- Use browser DevTools (F12 → Toggle Device Toolbar)
- Test on actual mobile device
- Try hamburger menu, touch interactions, forms

## ❓ Troubleshooting

**Problem**: Port 5173 already in use  
**Solution**: Kill the process or use a different port: `npm run dev -- --port 3000`

**Problem**: Dependencies not installing  
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Problem**: Map not loading  
**Solution**: Check internet connection (Leaflet uses CDN)

**Problem**: Build fails  
**Solution**: Run `npm run build` locally to see error details

## 📚 More Resources

- [Full README](README.md) - Complete project documentation
- [Deployment Guide](DEPLOYMENT.md) - Deploy to GitHub Pages
- [Contributing](CONTRIBUTING.md) - How to contribute
- [Admin Guide](ADMIN_GUIDE.md) - Admin features guide

## 💬 Need Help?

Contact the team:
- **Nazmus Sakib**: s8116515@live.vu.edu.au (Project Leader)
- **Md Abudozana Niloy**: s8138202@live.vu.edu.au
- **Suvekshya Shrestha**: s8103527@live.vu.edu.au
- **Bisesta Shah**: s8103504@live.vu.edu.au

---

**Happy coding! 🌱 Let's make Sydney cleaner together!**
