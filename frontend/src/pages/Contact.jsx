import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../utils/api';
import { showToast } from '../utils/toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'General'
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

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    setLoading(true);
    try {
      await submitContactForm(formData);
      showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'General'
      });
    } catch (error) {
      showToast('Error sending message', 'error');
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
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 border-b border-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gold mb-2">Email</h3>
              <p className="text-gray-400">contact@oryzene.com</p>
              <p className="text-gray-500 text-sm">We reply within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gold mb-2">Phone</h3>
              <p className="text-gray-400">+91 XXXXXXXXXX</p>
              <p className="text-gray-500 text-sm">Available Mon-Sun</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gold mb-2">Location</h3>
              <p className="text-gray-400">Mumbai, India</p>
              <p className="text-gray-500 text-sm">Serving 25+ cities</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="card p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
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
                  <label className="block text-sm font-semibold text-gold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="form-control w-full"
                  />
                </motion.div>

                {/* Type */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gold mb-2">Enquiry Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="form-control w-full"
                  >
                    <option value="General">General Enquiry</option>
                    <option value="Business">Business Proposal</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div variants={itemVariants} className="mt-6">
                <label className="block text-sm font-semibold text-gold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="form-control w-full"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="mt-6">
                <label className="block text-sm font-semibold text-gold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please share your message..."
                  rows="6"
                  className="form-control w-full resize-none"
                ></textarea>
              </motion.div>

              {/* Submit */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-8 py-4 text-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/50 disabled:opacity-50"
              >
                <Send size={20} />
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
