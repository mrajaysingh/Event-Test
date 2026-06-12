import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const Payments = () => {
  const [bookingData] = useState({
    bookingId: 'ORY-1234567890-ABC12345',
    eventType: 'Wedding Planning',
    guestCount: 150,
    estimatedCost: 250000
  });

  return (
    <div className="pt-20 pb-20 min-h-screen bg-black">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Payment <span className="gradient-text">Gateway</span>
          </h1>
          <p className="text-xl text-gray-400">
            Complete your booking payment securely
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Booking Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-2 card p-8"
          >
            <h2 className="text-2xl font-bold text-gold mb-6">Booking Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Booking ID</span>
                <span className="text-white font-mono">{bookingData.bookingId}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Event Type</span>
                <span className="text-white">{bookingData.eventType}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Number of Guests</span>
                <span className="text-white">{bookingData.guestCount}</span>
              </div>
              <div className="flex justify-between items-center py-3 pt-4">
                <span className="text-xl font-bold text-gold">Total Amount</span>
                <span className="text-3xl font-bold text-gold">₹{bookingData.estimatedCost.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>

          {/* Amount Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card p-8 bg-gradient-to-br from-gold to-yellow-500 text-center"
          >
            <p className="text-black text-sm font-semibold mb-2">Amount to Pay</p>
            <p className="text-4xl font-bold text-black">
              ₹{bookingData.estimatedCost.toLocaleString()}
            </p>
            <p className="text-black text-xs mt-2 opacity-70">
              Including all taxes and fees
            </p>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="card p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gold mb-8">Select Payment Method</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* UPI */}
            <div className="border-2 border-gray-700 rounded-lg p-6 hover:border-gold transition-colors cursor-not-allowed opacity-50">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">₹</span>
                </div>
                <h3 className="font-bold text-lg mb-2">UPI</h3>
                <p className="text-gray-400 text-sm">Google Pay, PhonePe, Paytm</p>
              </div>
            </div>

            {/* Credit/Debit Card */}
            <div className="border-2 border-gray-700 rounded-lg p-6 hover:border-gold transition-colors cursor-not-allowed opacity-50">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">💳</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Credit/Debit Card</h3>
                <p className="text-gray-400 text-sm">Visa, Mastercard, Amex</p>
              </div>
            </div>

            {/* Wallet */}
            <div className="border-2 border-gray-700 rounded-lg p-6 hover:border-gold transition-colors cursor-not-allowed opacity-50">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">👛</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Mobile Wallet</h3>
                <p className="text-gray-400 text-sm">Wallets & Bank Transfer</p>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-blue-900 bg-opacity-20 border border-blue-500 border-opacity-30 rounded-lg p-6 flex gap-4">
            <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-white mb-1">Coming Soon!</h3>
              <p className="text-gray-300 text-sm">
                Razorpay integration is coming very soon. We're setting up the most secure and reliable payment gateway for your peace of mind. In the meantime, you can complete your booking and we'll send you payment details via email.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Secure Payment Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">🔒 Secured by Razorpay Payment Gateway</p>
          <p className="text-gray-500 text-sm">
            Your payment information is encrypted and secure. We'll confirm your booking status via email within 24 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Payments;
