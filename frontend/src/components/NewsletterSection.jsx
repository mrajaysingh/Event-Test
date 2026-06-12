import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeNewsletter } from '../utils/api';
import { showToast } from '../utils/toast';
import { Mail, ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email', 'error');
      return;
    }

    setLoading(true);
    try {
      await subscribeNewsletter(email);
      showToast('Successfully subscribed to newsletter!', 'success');
      setEmail('');
    } catch (error) {
      showToast('Error subscribing. Please try again.', 'error');
    }
    setLoading(false);
  };

  return (
    <section className="section-padding bg-black border-b border-gray-800">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card text-center"
        >
          <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-6">
            <Mail size={32} className="text-black" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated With <span className="gradient-text">ORYZENE</span>
          </h2>

          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and get exclusive offers, event tips, and industry insights delivered to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control flex-1"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              {loading ? 'Subscribing...' : (
                <>
                  Subscribe
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. No spam, just valuable content.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
