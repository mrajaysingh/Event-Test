import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, MapPin, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: BarChart3, label: 'Events Managed', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '5000+' },
    { icon: MapPin, label: 'Cities Covered', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '8+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                    <Icon size={32} className="text-black" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
