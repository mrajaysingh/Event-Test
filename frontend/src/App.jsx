import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import TrackBooking from './pages/TrackBooking';
import Pricing from './pages/Pricing';
import Payments from './pages/Payments';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/track-booking" element={<TrackBooking />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
        <ToastContainer theme="dark" />
      </div>
    </Router>
  );
}

export default App;
