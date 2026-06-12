import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I book an event with ORYZENE?',
      answer: 'Simply fill out our booking form with your event details, and our team will get back to you within 24 hours to confirm and discuss customization options.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We offer flexible cancellation policies. Cancellations made 30 days before the event are eligible for a full refund.'
    },
    {
      question: 'Do you provide customization for events?',
      answer: 'Absolutely! All our events are fully customizable to match your preferences and requirements. Our team will work with you to create the perfect experience.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, UPI, and bank transfers. Payment details will be provided in your booking confirmation.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking 2-3 months in advance for major events, but we can accommodate last-minute bookings based on availability.'
    },
    {
      question: 'Do you handle events in multiple cities?',
      answer: 'Yes! We manage events across 25+ cities. If your city is not listed, feel free to contact us for availability.'
    }
  ];

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
    <section className="section-padding bg-gradient-to-b from-black to-gray-900 border-b border-gray-800">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-0 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800 transition-colors duration-300 text-left"
              >
                <span className="font-semibold text-lg text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gold" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700"
                  >
                    <p className="px-6 py-4 text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
