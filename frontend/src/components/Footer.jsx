import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">O</span>
              </div>
              <span className="text-xl font-bold gradient-text">ORYZENE</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Turning Every Occasion Into an Unforgettable Experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold gradient-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors text-sm">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-gold transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-gold transition-colors text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold gradient-text mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Weddings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Corporate Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Concerts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Esports</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold gradient-text mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0 text-gold" />
                <span>contact@oryzene.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0 text-gold" />
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-gold" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; 2024 ORYZENE Event Management. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gold hover:text-yellow-300 transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
