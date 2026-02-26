# Smart Rubbish Detection System - Sydney

A comprehensive web application designed to empower Sydney residents to actively participate in keeping our city clean through community engagement and innovative technology.

![Smart Rubbish Detection System](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178c6)

> 📚 **[Complete Documentation Index](DOCUMENTATION_INDEX.md)** | ⚡ **[Quick Deploy (10 min)](DEPLOY_NOW.md)** | 📖 **[Deployment Guide](GITHUB_DEPLOYMENT.md)**

## 🌟 Features

### Core Functionality
- **Dual Authentication System**: Support for community members and 4 fixed admin accounts (admin1-admin4@sydney.gov.au)
- **Report Rubbish**: Two-column layout with comprehensive form and interactive heat map
- **GPS Auto-Detection**: Browser permission handling with manual pinpoint functionality
- **Real-time Reverse Geocoding**: Automatic address detection from coordinates
- **Interactive Heat Map**: Centered on Sydney CBD with 12 pre-loaded sample data points across iconic locations
- **Eco Points Reward System**: Users earn $1 AUD credit for every 100 eco points collected

### Additional Features
- **Real-time Notifications**: In-app notification bell with live updates
- **Email Notification System**: Comprehensive email tracking and management
- **Mobile-Optimized**: Fully responsive with hamburger menu and touch-friendly interfaces
- **Data Persistence**: LocalStorage-based data management with versioning
- **Input Validation**: Comprehensive sanitization and error handling
- **Duplicate Prevention**: Smart duplicate detection system
- **Awareness Page**: Educational content about waste management and NSW environmental laws
- **About Us Page**: Team information and project details

## 👥 Team

This project is developed and maintained by:

- **Nazmus Sakib** - Project Leader (s8116515@live.vu.edu.au)
- **Md Abudozana Niloy** - Full Stack Developer (s8138202@live.vu.edu.au)
- **Suvekshya Shrestha** - UI/UX Designer & Developer (s8103527@live.vu.edu.au)
- **Bisesta Shah** - Backend Developer (s8103504@live.vu.edu.au)

## 🚀 Live Demo

Visit the live application: [https://YOUR_USERNAME.github.io/YOUR_REPO_NAME](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME)

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

**Quick Deploy**: See [DEPLOY_NOW.md](DEPLOY_NOW.md) for 10-minute deployment guide!

## 📚 Complete Documentation

- **[DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md)** - 📋 Overview of deployment setup
- **[DEPLOY_NOW.md](DEPLOY_NOW.md)** - ⚡ Quick 10-minute deployment
- **[GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md)** - 📖 Comprehensive deployment guide
- **[PRE_DEPLOYMENT_CHECKLIST.md](PRE_DEPLOYMENT_CHECKLIST.md)** - ✅ Pre-deployment checklist
- **[SUPABASE_SETUP.md](SUPABASE_SETUP.md)** - 🗄️ Database setup instructions
- **[CLOUD_MIGRATION_GUIDE.md](CLOUD_MIGRATION_GUIDE.md)** - ☁️ Cloud storage migration guide

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Maps**: Leaflet & React Leaflet
- **Animations**: Motion (Framer Motion)
- **Form Handling**: React Hook Form
- **UI Components**: Radix UI, Material UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Supabase (PostgreSQL + Auth)
- **Data Storage**: Supabase Cloud Database

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deployment to GitHub Pages

### Option 1: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Option 2: Automatic Deployment with GitHub Actions

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**Setup Steps:**

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push your code to the `main` branch
4. The workflow will automatically build and deploy your site

## 🔑 Admin Accounts

The system includes 4 pre-configured admin accounts:

- admin1@sydney.gov.au
- admin2@sydney.gov.au
- admin3@sydney.gov.au
- admin4@sydney.gov.au

**Default Password**: `Admin@123`

## 📊 Sample Data

The application comes pre-loaded with 12 sample rubbish reports across iconic Sydney locations:

- Sydney Opera House
- Bondi Beach
- The Rocks
- Darling Harbour
- Circular Quay
- Royal Botanic Gardens
- Hyde Park
- Chinatown
- Pyrmont
- Barangaroo Reserve
- Sydney Tower Eye
- And more...

## 🗂️ Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── components/    # Reusable React components
│   │   ├── context/       # React Context (Auth)
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   ├── App.tsx        # Main app component
│   │   └── routes.tsx     # Route definitions
│   ├── imports/           # Figma imported assets
│   └── styles/            # CSS and Tailwind styles
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Design System

The application uses a modern, eco-friendly design palette:

- **Primary Green**: Sustainability theme
- **Whites & Soft Grays**: Clean, professional look
- **Accent Colors**: Strategic use for CTAs and alerts
- **Typography**: System font stack for optimal readability
- **Spacing**: Consistent 8px grid system

## 📱 Mobile Optimization

- Hamburger menu for navigation
- Touch-friendly interfaces (minimum 44x44px touch targets)
- Responsive layouts that stack properly
- Mobile-optimized forms and heat map
- Proper touch feedback throughout

## 🔒 Data & Privacy

- All data is stored in **Supabase Cloud Database** (PostgreSQL)
- Accessible from any device with proper authentication
- Data persists indefinitely with automatic backups
- Industry-standard security with Row Level Security (RLS)
- Passwords hashed with bcrypt
- Secure session management with JWT tokens
- Users can only access their own data (admins can access all)
- **Note**: While Supabase provides enterprise-grade security, this demonstration project should be reviewed for production use with sensitive data

### Cloud Storage Benefits
- ✅ Multi-device access
- ✅ Real-time synchronization
- ✅ Automatic backups
- ✅ Scalable infrastructure
- ✅ Global CDN delivery
- ✅ Row-level security policies

See [SUPABASE_SETUP.md](SUPABASE_SETUP.md) and [CLOUD_MIGRATION_GUIDE.md](CLOUD_MIGRATION_GUIDE.md) for more details.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or feedback, please contact the team:

- **Project Leader**: Nazmus Sakib - s8116515@live.vu.edu.au
- **GitHub Issues**: [Create an issue](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues)

## 🙏 Acknowledgments

- NSW Environment Protection Authority
- City of Sydney Council
- Planet Ark Recycling Near You
- OpenStreetMap contributors
- All open-source libraries used in this project

---

**Built with ❤️ for a cleaner, greener Sydney**