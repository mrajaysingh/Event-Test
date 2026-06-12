import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Book Event', path: '/booking' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Track Booking', path: '/track-booking' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">O</span>
            </div>
            <span className="text-xl font-bold gradient-text">ORYZENE</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300 hover:bg-gray-900 rounded-md"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Link to="/admin-login" className="hidden md:block btn-primary text-sm">
              Admin
            </Link>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            >
              {isDarkMode ? <Sun size={20} className="text-gold" /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-900 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-down">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-300 hover:text-gold hover:bg-gray-900 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/admin-login"
              className="block px-4 py-2 btn-primary text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
