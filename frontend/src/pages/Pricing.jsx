import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRICING } from '../utils/constants';
import { Check } from 'lucide-react';

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started with our flexible pricing plans. All packages are fully customizable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PRICING.map((plan, index) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className="card p-8 relative group overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>

                <h3 className="text-2xl font-bold text-gold mb-2">{plan.title}</h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.basePrice}</span>
                  <span className="text-gray-400 text-sm">Starting from</span>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  Get a custom quote based on your specific requirements
                </p>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-gold mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className="btn-primary w-full text-center block group-hover:shadow-lg group-hover:shadow-gold/50 transition-all"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Pricing Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Pricing Available
            </h2>

            <p className="text-gray-400 mb-8 text-lg">
              Final pricing depends on your event requirements and customization level. Our team will provide a detailed quote based on:
            </p>

            <div className="space-y-3 text-left mb-8 max-w-md mx-auto">
              <div className="flex gap-3">
                <Check size={20} className="text-gold flex-shrink-0" />
                <span className="text-gray-300">Event complexity and scale</span>
              </div>
              <div className="flex gap-3">
                <Check size={20} className="text-gold flex-shrink-0" />
                <span className="text-gray-300">Number of guests and duration</span>
              </div>
              <div className="flex gap-3">
                <Check size={20} className="text-gold flex-shrink-0" />
                <span className="text-gray-300">Venue requirements and location</span>
              </div>
              <div className="flex gap-3">
                <Check size={20} className="text-gold flex-shrink-0" />
                <span className="text-gray-300">Additional services and add-ons</span>
              </div>
            </div>

            <Link to="/contact" className="btn-primary">
              Get Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
