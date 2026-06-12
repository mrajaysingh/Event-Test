# ORYZENE - Deployment Guide

## 🌐 Production Deployment

This guide will help you deploy ORYZENE to production environments.

## 📋 Pre-Deployment Checklist

- [ ] Update `.env` variables for production
- [ ] Change admin credentials
- [ ] Configure MongoDB Atlas (or production DB)
- [ ] Set up email service (Gmail, SendGrid, etc.)
- [ ] Update CORS origins
- [ ] Enable HTTPS
- [ ] Test all features locally
- [ ] Run security audit
- [ ] Set up monitoring
- [ ] Create backups strategy

## 🚀 Backend Deployment (Railway/Render)

### Option 1: Railway.app

1. **Create Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy Backend**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login
   railway login
   
   # Create project
   railway init
   
   # Add environment variables
   railway variables set
   
   # Deploy
   railway up
   ```

3. **Set Environment Variables in Dashboard**
   ```env
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/oryzene
   JWT_SECRET=your_production_secret_key
   PORT=3000
   NODE_ENV=production
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ADMIN_EMAIL=admin@oryzene.com
   ADMIN_PASSWORD=change_this_in_production
   FRONTEND_URL=https://your-frontend-domain.com
   ```

### Option 2: Render.com

1. **Create Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Deploy Backend**
   - Create new "Web Service"
   - Connect GitHub repo
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables
   - Deploy

## 🎨 Frontend Deployment (Vercel/Netlify)

### Option 1: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel
   ```

3. **Environment Variables**
   - In Vercel Dashboard → Project Settings → Environment Variables
   - Add `VITE_API_URL=https://your-backend-api.com/api`

4. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework: `Vite`

### Option 2: Netlify

1. **Connect Repository**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Connect GitHub

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add `VITE_API_URL=https://your-backend-api.com/api`

## 💾 Database Setup (MongoDB Atlas)

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up with Google/GitHub

2. **Create Cluster**
   - Click "Create" project
   - Select "Build a Database"
   - Choose Free tier (M0)
   - Select region closest to your users
   - Create cluster

3. **Create User**
   - Go to Database Access
   - Add Database User
   - Generate password
   - Set privileges

4. **Get Connection String**
   - Click "Connect" on cluster
   - Choose "Connect your application"
   - Copy connection string
   - Replace username, password, and database name

5. **Configure IP Whitelist**
   - Go to Network Access
   - Add IP Address "0.0.0.0/0" (for development)
   - Use specific IPs in production

## 📧 Email Service Setup

### Gmail
1. Enable 2FA on Google Account
2. Generate app password: https://myaccount.google.com/apppasswords
3. Use as `EMAIL_PASSWORD` in `.env`

### SendGrid (Recommended for Production)
1. Create account at https://sendgrid.com
2. Create API key
3. Update `.env`:
   ```env
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_USER=apikey
   EMAIL_PASSWORD=SG.your_api_key
   ```

### AWS SES
1. Set up AWS account and SES service
2. Configure SMTP credentials
3. Update `.env` with credentials

## 🔒 Security Measures

### Backend Security
```javascript
// Enable HTTPS
const https = require('https');

// Set security headers
app.use(helmet());

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### Frontend Security
- Use Content Security Policy
- Implement HTTPS
- Sanitize user inputs
- Validate API responses
- Store tokens securely

### Database Security
- Use strong passwords
- Enable IP whitelist
- Regular backups
- Encryption at rest
- Audit logging

## 📊 Monitoring & Analytics

### Backend Monitoring
- **PM2** - Process management
- **New Relic** - Performance monitoring
- **Sentry** - Error tracking
- **Datadog** - Infrastructure monitoring

### Frontend Monitoring
- **Google Analytics** - Traffic analysis
- **Sentry** - Error tracking
- **LogRocket** - User session recording

### Database Monitoring
- MongoDB Atlas built-in monitoring
- Automated backups
- Performance insights

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy ORYZENE

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy Backend
        run: |
          cd backend
          npm install
          npm test
          
      - name: Deploy Frontend
        run: |
          cd frontend
          npm install
          npm run build
```

## 📈 Performance Optimization

### Backend
- Enable gzip compression
- Implement caching
- Optimize database queries
- Use CDN for static files
- Implement pagination

### Frontend
- Code splitting with React Router
- Lazy loading components
- Image optimization
- CSS minification
- JavaScript tree-shaking

## 🆘 Troubleshooting Production Issues

### Backend Won't Start
```bash
# Check logs
railway logs

# Verify environment variables
railway variables

# Rebuild
railway build
```

### Frontend Not Loading
- Check build logs in Vercel/Netlify
- Verify environment variables
- Check browser console for errors
- Clear browser cache and rebuild

### Database Connection Issues
- Verify connection string
- Check IP whitelist
- Test connection locally
- Check network connectivity

### Email Not Sending
- Verify SMTP credentials
- Check firewall/ports
- Test email template
- Check spam folder
- Verify recipient email

## 📋 Production Checklist

- [ ] All environment variables set
- [ ] Database backed up
- [ ] Email service configured
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] Rate limiting enabled
- [ ] Monitoring set up
- [ ] Error tracking enabled
- [ ] Analytics configured
- [ ] Backup strategy implemented
- [ ] Rollback plan documented
- [ ] Team trained on deployment
- [ ] Documentation updated
- [ ] Performance baseline established

## 🚨 Emergency Procedures

### Database Recovery
```javascript
// Restore from backup
db.collection.restore(backupFile);
```

### Rollback Deployment
```bash
# Railway
railway rollback

# Vercel
vercel rollback
```

## 📞 Support Resources

- Railway: https://docs.railway.app
- Render: https://render.com/docs
- Vercel: https://vercel.com/docs
- MongoDB: https://docs.mongodb.com
- Express.js: https://expressjs.com
- React: https://react.dev

---

For additional support, contact: support@oryzene.com
