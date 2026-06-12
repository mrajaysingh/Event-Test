import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
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
              About <span className="gradient-text">ORYZENE</span>
            </h1>
            <p className="text-xl text-gray-400">
              Meet the founder and vision behind premium event experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="card p-12 text-center"
          >
            <motion.div
              variants={itemVariants}
              className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-8 flex items-center justify-center"
            >
              <span className="text-6xl">👤</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gold mb-2">
              Shivansh Shukla
            </motion.h2>

            <motion.p variants={itemVariants} className="text-2xl text-gray-300 mb-6">
              Founder & Owner of ORYZENE
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8">
              With a passion for creating unforgettable moments, Shivansh founded ORYZENE to revolutionize the event management industry. His vision is to combine creativity, professionalism, and innovation to deliver world-class event experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 border-b border-gray-800">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="card p-8">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                <Target size={28} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                To be the leading event management company that transforms visions into reality. We're committed to delivering exceptional quality, innovation, and customer satisfaction in every event we organize.
              </p>
              <p className="text-gray-400 text-sm">
                Every event is an opportunity to create memories that last a lifetime.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-8">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                <Lightbulb size={28} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gold mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                To establish ORYZENE as the gold standard in event management across India and beyond. We envision a future where every occasion is celebrated with unparalleled creativity and professionalism.
              </p>
              <p className="text-gray-400 text-sm">
                Excellence in execution, innovation in planning, passion in delivery.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Achievements & <span className="gradient-text">Milestones</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={itemVariants} className="card text-center p-8">
              <Award size={36} className="text-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gold mb-2">500+</h3>
              <p className="text-gray-400">Events Successfully Executed</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card text-center p-8">
              <Users size={36} className="text-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gold mb-2">5000+</h3>
              <p className="text-gray-400">Happy Satisfied Clients</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card text-center p-8">
              <Award size={36} className="text-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gold mb-2">25+</h3>
              <p className="text-gray-400">Cities Across India</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card text-center p-8">
              <Lightbulb size={36} className="text-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gold mb-2">8+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { year: '2016', title: 'Founded ORYZENE', desc: 'Started with a vision to revolutionize event management' },
              { year: '2018', title: 'First 100 Events', desc: 'Achieved major milestone with successful event executions' },
              { year: '2020', title: 'Pan-India Expansion', desc: 'Expanded operations across 25+ cities in India' },
              { year: '2024', title: 'Digital Transformation', desc: 'Launched online booking platform and digital services' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-8 items-center"
              >
                <div className="flex-shrink-0 w-24 text-gold font-bold text-2xl">
                  {milestone.year}
                </div>
                <div className="card p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
