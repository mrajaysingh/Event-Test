import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getDashboardStats, getAllBookings, updateBookingStatus, deleteBooking } from '../utils/api';
import { showToast } from '../utils/toast';
import { LogOut, BarChart3, Users, TrendingUp, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
      return;
    }

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, bookingsRes] = await Promise.all([
        getDashboardStats(),
        getAllBookings({})
      ]);
      setStats(statsRes.data.stats);
      setBookings(bookingsRes.data.bookings);
    } catch (error) {
      showToast('Error loading dashboard data', 'error');
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin-login');
      }
    }
    setLoading(false);
  };

  const handleStatusUpdate = async (bookingId, newStatus) => {
    try {
      await updateBookingStatus(bookingId, newStatus);
      showToast('Booking status updated', 'success');
      fetchData();
    } catch (error) {
      showToast('Error updating status', 'error');
    }
  };

  const handleDelete = async (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await deleteBooking(bookingId);
        showToast('Booking deleted', 'success');
        fetchData();
      } catch (error) {
        showToast('Error deleting booking', 'error');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
    showToast('Logged out successfully', 'success');
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.bookingId.toLowerCase().includes(filter.toLowerCase()) ||
                         booking.fullName.toLowerCase().includes(filter.toLowerCase()) ||
                         booking.email.toLowerCase().includes(filter.toLowerCase());
    const matchesType = !filterType || booking.status === filterType;
    return matchesSearch && matchesType;
  });

  if (loading) {
    return (
      <div className="pt-20 pb-20 min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 min-h-screen bg-black">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin <span className="gradient-text">Dashboard</span></h1>
            <p className="text-gray-400">Manage all event bookings and queries</p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary flex items-center gap-2"
          >
            <LogOut size={20} />
            Logout
          </button>
        </motion.div>

        {/* Stats Cards */}
        {stats && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Total Bookings</p>
                  <p className="text-3xl font-bold text-gold">{stats.totalBookings}</p>
                </div>
                <BarChart3 className="text-gold opacity-50" size={32} />
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Pending</p>
                  <p className="text-3xl font-bold text-yellow-400">{stats.pendingBookings}</p>
                </div>
                <TrendingUp className="text-yellow-400 opacity-50" size={32} />
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Confirmed</p>
                  <p className="text-3xl font-bold text-green-400">{stats.confirmedBookings}</p>
                </div>
                <Users className="text-green-400 opacity-50" size={32} />
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Revenue</p>
                  <p className="text-3xl font-bold text-gold">₹{(stats.totalRevenue / 100000).toFixed(1)}L</p>
                </div>
                <DollarSign className="text-gold opacity-50" size={32} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="card p-6 mb-8 flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Search by Booking ID, Name, or Email..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-control flex-1"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="form-control"
          >
            <option value="">All Status</option>
            <option value="Booking Received">Booking Received</option>
            <option value="Under Review">Under Review</option>
            <option value="Confirmed">Confirmed</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </motion.div>

        {/* Bookings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="card p-8 overflow-x-auto"
        >
          <h2 className="text-2xl font-bold text-gold mb-6">All Bookings</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 font-bold text-gold">Booking ID</th>
                <th className="text-left py-4 px-4 font-bold text-gold">Customer</th>
                <th className="text-left py-4 px-4 font-bold text-gold">Event Type</th>
                <th className="text-left py-4 px-4 font-bold text-gold">Date</th>
                <th className="text-left py-4 px-4 font-bold text-gold">Status</th>
                <th className="text-left py-4 px-4 font-bold text-gold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking._id} className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                  <td className="py-4 px-4 text-gray-300 font-mono text-xs">{booking.bookingId}</td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-white font-semibold">{booking.fullName}</p>
                      <p className="text-gray-500 text-xs">{booking.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{booking.eventType}</td>
                  <td className="py-4 px-4 text-gray-300">{new Date(booking.eventDate).toLocaleDateString()}</td>
                  <td className="py-4 px-4">
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusUpdate(booking.bookingId, e.target.value)}
                      className="bg-gray-800 text-white px-3 py-1 rounded text-xs border border-gray-700"
                    >
                      <option value="Booking Received">Booking Received</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleDelete(booking.bookingId)}
                      className="text-red-500 hover:text-red-400 text-xs font-bold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredBookings.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No bookings found
            </div>
          )}

          <p className="text-gray-500 text-xs mt-4">
            Showing {filteredBookings.length} of {bookings.length} bookings
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
