import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../utils/constants';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
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
    <section className="section-padding bg-gradient-to-b from-black to-gray-900 border-b border-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive event planning and execution for every occasion
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300">
                  <span className="text-black font-bold text-xl">✨</span>
                </div>

                <h3 className="text-lg font-bold text-gold mb-2 group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                      <span className="text-gold">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-gold group-hover:text-yellow-300 transition-colors">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
