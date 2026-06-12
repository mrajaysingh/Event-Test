import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { adminLogin } from '../utils/api';
import { showToast } from '../utils/toast';
import { LogIn } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await adminLogin(credentials);
      localStorage.setItem('adminToken', response.data.token);
      showToast('Admin login successful!', 'success');
      navigate('/admin-dashboard');
    } catch (error) {
      showToast(error.response?.data?.message || 'Invalid credentials', 'error');
    }
    setLoading(false);
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="container mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="card p-12"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-2xl">O</span>
            </div>
            <span className="text-2xl font-bold gradient-text">ORYZENE</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-bold text-center mb-2"
          >
            Admin <span className="gradient-text">Login</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-center mb-8"
          >
            Access the admin dashboard
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="admin@oryzene.com"
                className="form-control w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="form-control w-full"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/50 disabled:opacity-50"
            >
              <LogIn size={20} />
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </motion.form>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center text-gray-500 text-xs mt-8"
          >
            Authorized personnel only. All activities are logged and monitored.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
