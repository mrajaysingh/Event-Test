# ORYZENE - Quick Start Guide

## 🎯 Project Overview

This is a complete, production-ready full-stack event management platform for ORYZENE.

## 🚀 Quick Start

### 1. Backend Setup (Terminal 1)

```bash
cd backend

# Install dependencies
npm install

# Create .env file with proper configuration
cp .env.example .env

# Edit .env with your MongoDB and email settings
# Important: Update these values:
# - MONGODB_URI
# - JWT_SECRET
# - EMAIL_USER and EMAIL_PASSWORD

# Start backend server
npm run dev
```

Backend runs on: **http://localhost:5000**

### 2. Frontend Setup (Terminal 2)

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

Frontend runs on: **http://localhost:5173**

## 🎨 Key Features Implemented

### Frontend Pages
- ✅ Home Page (Hero, Stats, Services, Testimonials, FAQ, Newsletter)
- ✅ Services Page
- ✅ Booking Form Page
- ✅ Booking Confirmation Page
- ✅ Track Booking Page
- ✅ Pricing Page
- ✅ Payments Page (UI ready, Razorpay integration coming)
- ✅ About Owner Page
- ✅ Contact Form Page
- ✅ Event Gallery Page
- ✅ Admin Login Page
- ✅ Admin Dashboard

### Admin Dashboard
- ✅ Secure Login
- ✅ Dashboard Statistics
- ✅ Booking Management
- ✅ Status Updates
- ✅ Search & Filter
- ✅ Delete Operations

### Additional Features
- ✅ Dark/Light Mode Toggle
- ✅ WhatsApp Button
- ✅ Newsletter Subscription
- ✅ Email Notifications
- ✅ PDF Receipt Download/Print
- ✅ Responsive Mobile Design
- ✅ Smooth Animations
- ✅ Toast Notifications
- ✅ Form Validation

## 🔑 Admin Credentials

**Email:** admin@oryzene.com
**Password:** admin123

⚠️ **Change these credentials in production!** (Update in backend `.env`)

## 📧 Email Configuration

To enable email functionality:

1. Go to https://myaccount.google.com/apppasswords
2. Generate app password for Gmail
3. Update in backend `.env`:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ```

## 💾 Database Setup

### Using MongoDB Locally
```bash
# Install MongoDB
# On macOS: brew install mongodb-community
# On Windows: Download from mongodb.com

# Start MongoDB service
mongod
```

### Using MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster and database
3. Get connection string
4. Update `MONGODB_URI` in backend `.env`

## 🧪 Testing the Application

### Create a Booking
1. Go to http://localhost:5173
2. Click "Book an Event"
3. Fill out the form and submit
4. You'll receive a confirmation with Booking ID

### Track Booking
1. Go to "Track Booking"
2. Enter Booking ID and Email
3. View current status

### Admin Dashboard
1. Go to http://localhost:5173/admin-login
2. Use credentials above
3. Manage all bookings

## 🚢 Deployment

### Frontend (Vercel)
```bash
# In frontend directory
npm run build
# Deploy build folder to Vercel
```

### Backend (Railway/Render)
```bash
# Create account and new app
# Connect GitHub repo
# Add environment variables
# Auto-deploy on push
```

## 🔧 Troubleshooting

### Backend connection fails
- Check MongoDB is running
- Verify `MONGODB_URI` in `.env`
- Check port 5000 is available

### Email not sending
- Verify email credentials
- Use Gmail app password (not regular password)
- Check spam folder

### Frontend can't reach backend
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env`
- Verify CORS is enabled

## 📚 Project Structure

```
event/
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── styles/
│   │   └── App.jsx
│   └── package.json
│
└── backend/          # Express + MongoDB application
    ├── models/
    ├── routes/
    ├── controllers/
    ├── middleware/
    ├── utils/
    ├── server.js
    └── package.json
```

## 🎯 Next Steps

1. **Customize Branding**
   - Update colors in `tailwind.config.js`
   - Update company info in components
   - Add your logo

2. **Configure Email**
   - Set up Gmail app password
   - Customize email templates

3. **Set Up Database**
   - Create MongoDB account
   - Update connection string

4. **Test All Features**
   - Create test bookings
   - Try admin dashboard
   - Test email notifications

5. **Deploy to Production**
   - Build frontend
   - Deploy to Vercel/Netlify
   - Deploy backend to Railway/Render

## 📞 Support

For issues or questions, refer to:
- Backend errors: Check terminal logs
- Frontend errors: Check browser console (F12)
- Email issues: Check `.env` configuration

---

**Ready to go live? This platform is production-ready!** 🚀
