import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'esports', name: 'Esports' },
    { id: 'concerts', name: 'Concerts' },
    { id: 'comedy', name: 'Comedy' }
  ];

  const images = [
    { id: 1, category: 'weddings', title: 'Grand Wedding Celebration' },
    { id: 2, category: 'corporate', title: 'Corporate Conference 2024' },
    { id: 3, category: 'esports', title: 'Gaming Tournament Finals' },
    { id: 4, category: 'concerts', title: 'Live Concert Series' },
    { id: 5, category: 'comedy', title: 'Stand-Up Comedy Night' },
    { id: 6, category: 'weddings', title: 'Traditional Wedding Decor' },
    { id: 7, category: 'corporate', title: 'Product Launch Event' },
    { id: 8, category: 'concerts', title: 'Festival Main Stage' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
              Event <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-gray-400">
              Explore our stunning collection of successfully executed events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'btn-primary shadow-lg shadow-gold/50'
                    : 'btn-secondary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layoutId={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-bold text-gold">{image.title}</h3>
                    <p className="text-gray-400 text-sm capitalize">{image.category}</p>
                  </div>
                </div>

                <div className="w-full h-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">🎉</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-2xl text-gray-400">No images in this category yet</p>
            </motion.div>
          )}
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
              Ready to Create Your Own <span className="gradient-text">Memorable Event?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              Let ORYZENE help you organize an event that will be remembered for years to come.
            </p>
            <a href="/booking" className="btn-primary text-lg px-8 py-4">
              Book Your Event Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
