# ORYZENE - Event Management Platform

A premium, production-ready full-stack event management platform for ORYZENE. Built with modern technologies for scalability and performance.

## 🎯 Overview

**Tagline:** "Turning Every Occasion Into an Unforgettable Experience."

ORYZENE is a comprehensive event management solution that enables customers to book premium events, track bookings, make payments, and enjoy a seamless experience for:

- Stand-Up Comedy Shows
- Esports & Gaming Tournaments
- Wedding Events
- Corporate Events
- College Festivals
- Concerts & Live Shows
- Birthday Parties
- Private Events
- Brand Promotions
- Product Launches

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Models](#database-models)
- [Deployment](#deployment)

## ✨ Features

### Customer Features
- **Premium Landing Page** - Stunning hero section with smooth animations
- **Event Booking System** - Complete booking form with validation
- **Booking Confirmation** - Instant confirmation with booking ID
- **Email Receipts** - Automated email confirmations via Nodemailer
- **Booking Tracker** - Track booking status in real-time
- **PDF Receipt** - Download or print booking receipts
- **Services Showcase** - Browse all available event services
- **Pricing Page** - Transparent pricing information
- **Event Gallery** - Beautiful showcase of past events
- **Contact Form** - Professional contact system
- **Newsletter Subscription** - Stay updated with latest offers
- **Dark/Light Mode** - Theme toggle for user preference
- **Responsive Design** - Mobile-first, fully responsive
- **WhatsApp Integration** - Quick contact via WhatsApp

### Admin Features
- **Secure Login** - Protected admin dashboard
- **Dashboard Statistics** - Real-time booking and revenue metrics
- **Booking Management** - View, filter, and manage all bookings
- **Status Updates** - Update booking status workflow
- **Contact Queries** - Manage customer inquiries
- **Newsletter Subscribers** - View all subscribers
- **Search & Filter** - Advanced booking search capabilities
- **Delete Operations** - Remove bookings from system

## 🛠 Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Axios** - HTTP client
- **jsPDF & html2canvas** - PDF generation
- **React Toastify** - Toast notifications
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Nodemailer** - Email service
- **CORS** - Cross-origin requests

## 📁 Project Structure

```
event/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── WhyChooseSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── FAQSection.jsx
│   │   │   ├── NewsletterSection.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── BookingConfirmation.jsx
│   │   │   ├── TrackBooking.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Payments.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   ├── constants.js
│   │   │   ├── pdf.js
│   │   │   └── toast.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Booking.js
│   │   ├── Payment.js
│   │   ├── ContactQuery.js
│   │   └── Newsletter.js
│   ├── routes/
│   │   ├── bookingRoutes.js
│   │   ├── authRoutes.js
│   │   ├── adminRoutes.js
│   │   └── contactRoutes.js
│   ├── controllers/
│   │   ├── bookingController.js
│   │   ├── authController.js
│   │   ├── adminController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   ├── validators.js
│   │   └── email.js
│   ├── config/
│   │   └── database.js
│   ├── templates/
│   │   └── (Email templates)
│   ├── server.js
│   └── package.json
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/oryzene
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
NODE_ENV=development

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@oryzene.com

ADMIN_EMAIL=admin@oryzene.com
ADMIN_PASSWORD=admin123

FRONTEND_URL=http://localhost:5173
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=ORYZENE
```

## ⚙️ Configuration

### MongoDB Connection
- Update `MONGODB_URI` in backend `.env` file
- For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/oryzene`

### Email Configuration
- Use Gmail or any SMTP provider
- Generate app-specific password for Gmail
- Update `EMAIL_USER` and `EMAIL_PASSWORD` in backend `.env`

### Admin Credentials
- Default: `admin@oryzene.com` / `admin123`
- Change in backend `.env` file for production

## ▶️ Running the Application

### Backend Server
```bash
cd backend
npm install
npm run dev
```
Server will run on `http://localhost:5000`

### Frontend Development Server
```bash
cd frontend
npm install
npm run dev
```
Frontend will run on `http://localhost:5173`

### Production Build
```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

## 📚 API Documentation

### Authentication
- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login user
- **POST** `/api/auth/admin-login` - Admin login

### Bookings
- **POST** `/api/bookings/create` - Create new booking
- **GET** `/api/bookings/track` - Track booking (with bookingId & email)
- **GET** `/api/bookings/all` - Get all bookings (admin only)
- **PUT** `/api/bookings/:bookingId/status` - Update booking status (admin only)
- **DELETE** `/api/bookings/:bookingId` - Delete booking (admin only)

### Admin
- **GET** `/api/admin/stats` - Dashboard statistics
- **GET** `/api/admin/queries` - Contact queries
- **PUT** `/api/admin/queries/:queryId` - Update query status
- **GET** `/api/admin/newsletter/subscribers` - Newsletter subscribers

### Contact
- **POST** `/api/contact/submit` - Submit contact form
- **POST** `/api/contact/newsletter/subscribe` - Subscribe to newsletter
- **POST** `/api/contact/newsletter/unsubscribe` - Unsubscribe from newsletter

## 💾 Database Models

### User
- name, email, password, phone, isAdmin, createdAt

### Booking
- bookingId, fullName, email, phone, eventType, eventDate, eventLocation
- numberOfGuests, budgetRange, additionalRequirements, status, paymentStatus
- paymentAmount, createdAt, updatedAt

### Payment
- bookingId, amount, status, paymentMethod, transactionId, createdAt

### ContactQuery
- name, email, phone, subject, message, type, status, createdAt

### Newsletter
- email, subscribedAt, isActive

## 🌐 Deployment

### Frontend (Vercel/Netlify)
1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Set environment variables
4. Deploy with `npm run build`

### Backend (Heroku/Railway)
1. Create account and new app
2. Connect GitHub repository
3. Set environment variables
4. Deploy automatically on push

## 🔐 Security Features

- ✅ JWT Authentication
- ✅ Password Hashing (Bcryptjs)
- ✅ Input Validation
- ✅ CORS Protection
- ✅ Admin Protected Routes
- ✅ Secure Email Configuration
- ✅ Environment Variables

## 📈 Performance Features

- ✅ Code Splitting with React Router
- ✅ Lazy Loading of Components
- ✅ CSS Optimization with Tailwind
- ✅ Image Optimization
- ✅ Smooth Animations with Framer Motion
- ✅ API Caching where applicable

## 🎨 Design Features

- ✅ Luxury Premium Theme (Black, Gold, Purple, White)
- ✅ Glassmorphism Effects
- ✅ Smooth Animations
- ✅ Responsive Grid System
- ✅ Mobile-First Approach
- ✅ Accessibility Compliant

## 🚀 Future Enhancements

- [ ] Razorpay Payment Integration
- [ ] Google Analytics Integration
- [ ] SEO Optimization
- [ ] Multi-language Support
- [ ] Advanced Reporting
- [ ] Slack Notifications
- [ ] Mobile App (React Native)
- [ ] AI-powered Recommendations

## 📝 License

This project is proprietary to ORYZENE Event Management.

## 👨‍💼 Contact

**Founder & Owner:** Shivansh Shukla
**Email:** contact@oryzene.com
**Phone:** +91 XXXXXXXXXX

---

Built with ❤️ by ORYZENE | "Turning Every Occasion Into an Unforgettable Experience"
#   E v e n t  
 #   E v e n t  
 #   E v e n t  
 