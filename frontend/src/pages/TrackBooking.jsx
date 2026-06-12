import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { trackBooking } from '../utils/api';
import { showToast } from '../utils/toast';
import { Search, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const TrackBooking = () => {
  const [bookingId, setBookingId] = useState('');
  const [email, setEmail] = useState('');
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!bookingId || !email) {
      showToast('Please enter Booking ID and Email', 'error');
      return;
    }

    setLoading(true);
    setSearched(true);
    try {
      const response = await trackBooking(bookingId, email);
      setBooking(response.data.booking);
    } catch (error) {
      showToast('Booking not found. Please check your details.', 'error');
      setBooking(null);
    }
    setLoading(false);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Booking Received':
      case 'Under Review':
        return <Clock className="text-yellow-500" size={32} />;
      case 'Confirmed':
      case 'In Progress':
      case 'Completed':
        return <CheckCircle className="text-green-500" size={32} />;
      case 'Cancelled':
        return <AlertCircle className="text-red-500" size={32} />;
      default:
        return <Clock className="text-gray-400" size={32} />;
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-black">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Track Your <span className="gradient-text">Booking</span>
          </h1>
          <p className="text-xl text-gray-400">
            Enter your Booking ID and email to track the status of your event
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card p-8 mb-8"
        >
          <form onSubmit={handleSearch}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gold mb-2">Booking ID</label>
                <input
                  type="text"
                  value={bookingId}
                  onChange={(e) => setBookingId(e.target.value)}
                  placeholder="e.g., ORY-1234567890-ABC12345"
                  className="form-control w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="form-control w-full"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3"
              >
                <Search size={20} />
                {loading ? 'Searching...' : 'Search Booking'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Results */}
        {searched && !loading && booking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Status Card */}
            <div className="card p-8 text-center">
              <div className="flex justify-center mb-4">
                {getStatusIcon(booking.status)}
              </div>
              <h2 className="text-3xl font-bold text-gold mb-2">{booking.status}</h2>
              <p className="text-gray-400">Current Booking Status</p>
            </div>

            {/* Details Card */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gold mb-6">Booking Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gold text-sm font-semibold mb-1">Booking ID</p>
                  <p className="text-white font-mono text-sm">{booking.bookingId}</p>
                </div>

                <div>
                  <p className="text-gold text-sm font-semibold mb-1">Customer Name</p>
                  <p className="text-white">{booking.fullName}</p>
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
                  <p className="text-gold text-sm font-semibold mb-1">Location</p>
                  <p className="text-white">{booking.eventLocation}</p>
                </div>

                <div>
                  <p className="text-gold text-sm font-semibold mb-1">Number of Guests</p>
                  <p className="text-white">{booking.numberOfGuests}</p>
                </div>

                <div>
                  <p className="text-gold text-sm font-semibold mb-1">Budget Range</p>
                  <p className="text-white">{booking.budgetRange}</p>
                </div>

                <div>
                  <p className="text-gold text-sm font-semibold mb-1">Payment Status</p>
                  <p className={booking.paymentStatus === 'Completed' ? 'text-green-400 font-bold' : 'text-yellow-400'}>
                    {booking.paymentStatus}
                  </p>
                </div>
              </div>

              {booking.additionalRequirements && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gold text-sm font-semibold mb-2">Special Requirements</p>
                  <p className="text-gray-400">{booking.additionalRequirements}</p>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gold mb-6">Booking Timeline</h3>

              <div className="space-y-4">
                {['Booking Received', 'Under Review', 'Confirmed', 'In Progress', 'Completed'].map((step, index) => {
                  const isCompleted = ['Booking Received', 'Under Review', 'Confirmed', 'In Progress', 'Completed'].indexOf(step) <= ['Booking Received', 'Under Review', 'Confirmed', 'In Progress', 'Completed'].indexOf(booking.status);

                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        isCompleted ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'
                      }`}>
                        {isCompleted ? '✓' : index + 1}
                      </div>
                      <span className={isCompleted ? 'text-white font-semibold' : 'text-gray-400'}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {searched && !loading && !booking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-8 text-center"
          >
            <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Booking Not Found</h3>
            <p className="text-gray-400 mb-4">
              Please check your Booking ID and email address and try again.
            </p>
            <button
              onClick={() => {
                setSearched(false);
                setBooking(null);
              }}
              className="btn-primary"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TrackBooking;
