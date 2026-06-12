import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../utils/constants';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="pt-16 pb-20">
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive event planning and execution tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="card p-8 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                      <span className="text-black font-bold text-2xl">✨</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gold mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-gray-200">Key Features:</p>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-gray-400">
                      <span className="text-gold font-bold">→</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/booking" className="btn-primary inline-block w-full text-center">
                  Book This Service
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              We offer custom event solutions. Reach out to discuss your specific requirements.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Contact Us for Custom Solutions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
