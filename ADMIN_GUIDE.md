# Smart Rubbish Detection System - Sydney

A community-driven web application for reporting and tracking rubbish across Sydney, Australia.

## Features

- **Modern Landing Page**: Eco-friendly design with hero section, stats, features, and how-it-works guide
- **Dual Authentication**: Separate login for community members and 4 fixed admin accounts
- **Report Rubbish**: Interactive form with GPS auto-detect and manual pinpoint location options
- **Heat Map Visualization**: Real-time interactive map showing rubbish density across Sydney
- **Eco-Points System**: Earn rewards for every report submitted
- **Admin Dashboard**: Manage and review community reports with status tracking

## Admin Accounts

There are 4 fixed admin accounts for testing:

1. **Email**: admin1@sydney.gov.au | **Password**: admin1pass
2. **Email**: admin2@sydney.gov.au | **Password**: admin2pass
3. **Email**: admin3@sydney.gov.au | **Password**: admin3pass
4. **Email**: admin4@sydney.gov.au | **Password**: admin4pass

## User Registration

Community members can register with any email and password (minimum 6 characters).

## Geolocation Features

- **Auto Detect**: Triggers browser GPS permission for automatic location detection with reverse geocoding
- **Manual Pinpoint**: Enter latitude/longitude coordinates manually
- **Error Handling**: Comprehensive error handling for permission denied, timeout, and position unavailable scenarios

## Mock Data

The application includes 12 pre-loaded sample data points across Sydney locations:
- The Rocks
- Circular Quay
- Sydney CBD
- Darling Harbour
- Opera House
- Milsons Point
- Pyrmont
- Surry Hills
- Wynyard
- Haymarket
- Potts Point
- Bondi Junction

## Tech Stack

- React with TypeScript
- React Router for navigation
- Leaflet for interactive maps
- LocalStorage for data persistence
- Tailwind CSS for styling
- Motion (Framer Motion) for animations
- Sonner for toast notifications
