# Supabase Setup Guide

This guide explains how to set up Supabase for the Smart Rubbish Detection System to enable cloud-based data storage accessible from anywhere.

## ✅ What Supabase Provides

- **Cloud Database**: PostgreSQL database hosted in the cloud
- **Authentication**: Secure user login and registration
- **Row Level Security**: Users only see their own data
- **Real-time Sync**: Data updates across all devices instantly
- **Global Access**: Access your data from any device, anywhere

## 🚀 Quick Setup

### Step 1: Access Supabase Project

Your Supabase project is already connected. The connection details are:
- **Project ID**: Available in `/utils/supabase/info.tsx`
- **API URL**: `https://{projectId}.supabase.co`
- **Anon Key**: Public API key (safe to use in frontend)

### Step 2: Run Database Migration

1. **Open Supabase Dashboard**
   - Go to your project dashboard
   - Navigate to **SQL Editor**

2. **Run the Migration SQL**
   - Copy the contents of `/supabase/migrations/001_initial_schema.sql`
   - Paste into the SQL Editor
   - Click **Run** to execute

This will create:
- ✅ `users` table - Store user profiles
- ✅ `reports` table - Store rubbish reports
- ✅ `notifications` table - Store user notifications
- ✅ Row Level Security policies - Secure data access
- ✅ Indexes - Optimize query performance
- ✅ `award_eco_points()` function - Award points automatically

### Step 3: Configure Authentication

1. **Go to Authentication Settings**
   - In Supabase dashboard, click **Authentication** → **Providers**

2. **Enable Email Provider**
   - Make sure **Email** is enabled
   - Configure email templates (optional)

3. **Disable Email Confirmation (for demo)**
   - Go to **Authentication** → **Settings**
   - Under **Email Auth**, disable **Enable email confirmations**
   - This allows instant signup without email verification

### Step 4: Seed Sample Data (Optional)

To add sample reports for testing, run this SQL:

```sql
-- Insert sample reports
INSERT INTO public.reports (user_id, type, description, location_lat, location_lng, location_address, status)
SELECT 
  (SELECT id FROM public.users LIMIT 1),
  'Plastic bottles',
  'Multiple plastic bottles found near the fountain',
  -33.8568,
  151.2153,
  'Sydney Opera House, Sydney NSW 2000',
  'pending'
WHERE EXISTS (SELECT 1 FROM public.users LIMIT 1);

INSERT INTO public.reports (user_id, type, description, location_lat, location_lng, location_address, status)
SELECT 
  (SELECT id FROM public.users LIMIT 1),
  'General litter',
  'Litter scattered along the beach promenade',
  -33.8915,
  151.2767,
  'Bondi Beach, Sydney NSW 2026',
  'pending'
WHERE EXISTS (SELECT 1 FROM public.users LIMIT 1);
```

## 🔄 Migrating from LocalStorage

The application now uses cloud storage by default. Your existing LocalStorage data will remain but won't sync to the cloud.

### To Preserve Existing Data:

If you have important data in LocalStorage, you can:

1. **Export LocalStorage data**:
   ```javascript
   // Run in browser console
   const data = {
     users: localStorage.getItem('smart_rubbish_users'),
     reports: localStorage.getItem('smart_rubbish_reports'),
     notifications: localStorage.getItem('smart_rubbish_notifications')
   };
   console.log(JSON.stringify(data, null, 2));
   ```

2. **Manually add to Supabase** via SQL Editor or create a migration script

## 🔒 Security Features

### Row Level Security (RLS)

The database is secured with RLS policies:

- **Users**:
  - Can view their own profile
  - Can update their own profile
  - Admins can view all users

- **Reports**:
  - Users can view their own reports
  - Users can create their own reports
  - Admins can view and update all reports

- **Notifications**:
  - Users can view their own notifications
  - Users can mark their notifications as read
  - Admins can create notifications for any user

### Authentication

- Passwords are hashed by Supabase (bcrypt)
- Session tokens are secure and HTTP-only
- Automatic session refresh
- CSRF protection built-in

## 👨‍💼 Admin Accounts

Admin accounts are created on first login:

- **Emails**: 
  - admin1@sydney.gov.au
  - admin2@sydney.gov.au
  - admin3@sydney.gov.au
  - admin4@sydney.gov.au

- **Password**: `Admin@123`

When an admin logs in for the first time, the account is automatically created in Supabase.

## 📊 Database Schema

### Users Table
```sql
users
├── id (UUID, PK)
├── email (TEXT, UNIQUE)
├── name (TEXT)
├── role (TEXT: 'user' | 'admin')
├── eco_points (INTEGER)
├── credits (INTEGER)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

### Reports Table
```sql
reports
├── id (UUID, PK)
├── user_id (UUID, FK → users)
├── type (TEXT)
├── description (TEXT)
├── photo (TEXT, nullable)
├── location_lat (DOUBLE PRECISION)
├── location_lng (DOUBLE PRECISION)
├── location_address (TEXT)
├── status (TEXT: 'pending' | 'reviewed' | 'resolved')
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

### Notifications Table
```sql
notifications
├── id (UUID, PK)
├── user_id (UUID, FK → users)
├── type (TEXT: 'report_reviewed' | 'report_resolved')
├── title (TEXT)
├── message (TEXT)
├── report_id (UUID, FK → reports)
├── read (BOOLEAN)
└── created_at (TIMESTAMP)
```

## 🔧 Functions

### award_eco_points(user_id, points)

Automatically awards eco points to a user and updates their credit balance:

```sql
SELECT award_eco_points(user_id, 10);
```

This is called automatically when a user submits a report.

## 🧪 Testing the Setup

### 1. Test User Registration
```typescript
import { registerUser } from './src/app/utils/cloudStorage';

const result = await registerUser('test@example.com', 'password123', 'Test User');
console.log(result);
```

### 2. Test User Login
```typescript
import { loginUser } from './src/app/utils/cloudStorage';

const result = await loginUser('test@example.com', 'password123');
console.log(result);
```

### 3. Test Report Creation
```typescript
import { saveReport } from './src/app/utils/cloudStorage';

const report = await saveReport({
  userId: 'user-id-here',
  type: 'Plastic bottles',
  description: 'Found plastic bottles near the park',
  location: {
    lat: -33.8688,
    lng: 151.2093,
    address: 'Sydney CBD'
  }
});
console.log(report);
```

### 4. Check Database
- Go to Supabase Dashboard → **Table Editor**
- View `users`, `reports`, and `notifications` tables
- Verify data is being stored correctly

## 📱 Features Enabled

With Supabase integration:

✅ **Cross-device Access** - Login from any device and see your data  
✅ **Real-time Sync** - Changes appear instantly everywhere  
✅ **Secure Authentication** - Industry-standard security  
✅ **Scalable Storage** - Store unlimited reports and users  
✅ **Automatic Backups** - Supabase handles backups  
✅ **Global CDN** - Fast access from anywhere in the world  

## 🐛 Troubleshooting

### Issue: "relation 'users' does not exist"

**Solution**: Run the migration SQL in Supabase SQL Editor

### Issue: "new row violates row-level security policy"

**Solution**: Make sure RLS policies are created (check migration SQL)

### Issue: "JWT expired" or "Invalid token"

**Solution**: User session expired, prompt user to login again

### Issue: Admin can't login

**Solution**: 
1. Make sure admin email is in ADMIN_EMAILS array
2. Use password: `Admin@123`
3. Check Supabase logs for auth errors

### Issue: Eco points not updating

**Solution**: Make sure the `award_eco_points` function is created in the database

## 📚 API Documentation

### Authentication APIs

```typescript
// Register
registerUser(email: string, password: string, name: string)

// Login
loginUser(email: string, password: string)

// Admin Login
loginAdmin(email: string, password: string)

// Logout
logoutUser()

// Get Current User
getCurrentAuthUser()
```

### Reports APIs

```typescript
// Save Report
saveReport(report: ReportData)

// Get All Reports
getReports()

// Update Report Status (Admin only)
updateReportStatus(reportId: string, status: 'pending' | 'reviewed' | 'resolved')

// Get User Stats
getUserStats()
```

### Notifications APIs

```typescript
// Create Notification (Admin only)
createNotification(userId: string, reportId: string, type: string, details: object)

// Get User Notifications
getUserNotifications(userId: string)

// Get Unread Count
getUnreadNotificationCount(userId: string)

// Mark as Read
markNotificationAsRead(notificationId: string)

// Mark All as Read
markAllNotificationsAsRead(userId: string)
```

## 🎓 Next Steps

1. ✅ Run the migration SQL
2. ✅ Configure authentication settings
3. ✅ Test user registration and login
4. ✅ Create a test report
5. ✅ Verify data in Supabase dashboard
6. ✅ Deploy your application

## 💡 Best Practices

- **Don't expose service role key** - Only use anon key in frontend
- **Use RLS policies** - Always rely on RLS for security
- **Validate inputs** - Client-side AND server-side validation
- **Handle errors gracefully** - Show user-friendly error messages
- **Monitor usage** - Check Supabase dashboard for usage stats

## 📧 Support

Need help? Contact the development team:
- **Nazmus Sakib**: s8116515@live.vu.edu.au

---

**Database Status**: ✅ Ready for cloud deployment  
**Authentication**: ✅ Configured  
**Security**: ✅ RLS policies active  
**Last Updated**: February 26, 2026
