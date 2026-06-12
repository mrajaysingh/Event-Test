import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Award, Users } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Excellence in every event execution with attention to detail'
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Fast booking confirmation and event preparation process'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your event success'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Satisfaction',
      description: 'We ensure your event exceeds all expectations'
    }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding bg-black border-b border-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">ORYZENE</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine creativity, expertise, and dedication to make every event unforgettable
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card flex space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold mb-2">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
