import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { downloadReceiptPDF, printPage } from '../utils/pdf';
import { CheckCircle, Download, Printer, Home } from 'lucide-react';

const BookingConfirmation = () => {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="pt-20 pb-20 min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gold mb-4">No booking data found</p>
          <Link to="/booking" className="btn-primary">Go Back to Booking</Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="card p-8 md:p-12 text-center"
        >
          {/* Success Icon */}
          <motion.div
            animate={{ scale: [0, 1.1, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center">
              <CheckCircle size={48} className="text-black" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Booking <span className="gradient-text">Confirmed!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 mb-8"
          >
            Your event booking has been received successfully
          </motion.p>

          {/* Booking Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 mb-8 border border-gold border-opacity-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-gold text-sm font-semibold mb-1">Booking ID</p>
                <p className="text-2xl font-bold text-white">{booking.bookingId}</p>
              </div>
              <div>
                <p className="text-gold text-sm font-semibold mb-1">Status</p>
                <p className="text-xl font-bold text-gold">{booking.status}</p>
              </div>
              <div>
                <p className="text-gold text-sm font-semibold mb-1">Event Type</p>
                <p className="text-white">{booking.eventType}</p>
              </div>
              <div>
                <p className="text-gold text-sm font-semibold mb-1">Event Date</p>
                <p className="text-white">{new Date(booking.eventDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-gold text-sm font-semibold mb-1">Number of Guests</p>
                <p className="text-white">{booking.numberOfGuests}</p>
              </div>
              <div>
                <p className="text-gold text-sm font-semibold mb-1">Location</p>
                <p className="text-white">{booking.eventLocation}</p>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-blue-900 bg-opacity-20 border border-blue-500 border-opacity-30 rounded-lg p-6 mb-8"
          >
            <p className="text-gray-300">
              Thank you for choosing ORYZENE! A confirmation email has been sent to <span className="text-gold font-bold">{booking.email}</span>. Our team will contact you within 24 hours to discuss your event in detail.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <button
              onClick={() => downloadReceiptPDF(booking, `ORYZENE-${booking.bookingId}.pdf`)}
              className="btn-primary flex items-center justify-center gap-2 flex-1"
            >
              <Download size={20} />
              Download Receipt
            </button>
            <button
              onClick={printPage}
              className="btn-secondary flex items-center justify-center gap-2 flex-1"
            >
              <Printer size={20} />
              Print Receipt
            </button>
          </motion.div>

          {/* Track Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="border-t border-gray-700 pt-8"
          >
            <p className="text-gray-400 mb-4">
              You can track your booking anytime using your Booking ID
            </p>
            <Link
              to="/track-booking"
              className="btn-primary inline-block"
            >
              Track Your Booking
            </Link>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gold hover:text-yellow-300 transition-colors"
            >
              <Home size={20} />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
