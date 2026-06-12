import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createBooking } from '../utils/api';
import { showToast } from '../utils/toast';
import { EVENT_TYPES, BUDGET_RANGES } from '../utils/constants';
import { CalendarDays, Users, DollarSign } from 'lucide-react';

const Booking = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventLocation: '',
    numberOfGuests: '',
    budgetRange: '',
    additionalRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.eventType || !formData.eventDate || !formData.eventLocation || !formData.numberOfGuests || !formData.budgetRange) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await createBooking(formData);
      showToast('Booking created successfully!', 'success');
      navigate('/booking-confirmation', { state: { booking: response.data.booking } });
    } catch (error) {
      showToast(error.response?.data?.message || 'Error creating booking', 'error');
    }
    setLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Book Your <span className="gradient-text">Event</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fill out the form below to begin your event planning journey with ORYZENE
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="form-control w-full"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="form-control w-full"
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  className="form-control w-full"
                />
              </motion.div>

              {/* Event Type */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-2">Event Type *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="form-control w-full"
                >
                  <option value="">Select Event Type</option>
                  {EVENT_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </motion.div>

              {/* Event Date */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-2">Event Date *</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="form-control w-full"
                />
              </motion.div>

              {/* Number of Guests */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-2">Number of Guests *</label>
                <input
                  type="number"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  placeholder="Expected number of guests"
                  className="form-control w-full"
                />
              </motion.div>

              {/* Event Location */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-2">Event Location *</label>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  placeholder="City, Venue, Address"
                  className="form-control w-full"
                />
              </motion.div>

              {/* Budget Range */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-2">Budget Range *</label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="form-control w-full"
                >
                  <option value="">Select Budget Range</option>
                  {BUDGET_RANGES.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Additional Requirements */}
            <motion.div variants={itemVariants} className="mt-6">
              <label className="block text-sm font-semibold text-gold mb-2">Additional Requirements</label>
              <textarea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleChange}
                placeholder="Any specific requirements or special requests?"
                rows="5"
                className="form-control w-full resize-none"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={loading}
              className="btn-primary w-full mt-8 py-4 text-lg font-bold hover:shadow-lg hover:shadow-gold/50 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Submit Booking Request'}
            </motion.button>

            <motion.p variants={itemVariants} className="text-center text-gray-400 text-sm mt-4">
              Our team will contact you within 24 hours to confirm your booking.
            </motion.p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
