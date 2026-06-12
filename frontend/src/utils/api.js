import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Bookings
export const createBooking = (bookingData) => api.post('/bookings/create', bookingData);
export const trackBooking = (bookingId, email) => api.get('/bookings/track', { params: { bookingId, email } });
export const getAllBookings = (filters) => api.get('/bookings/all', { params: filters });
export const updateBookingStatus = (bookingId, status) => api.put(`/bookings/${bookingId}/status`, { status });
export const deleteBooking = (bookingId) => api.delete(`/bookings/${bookingId}`);

// Auth
export const register = (userData) => api.post('/auth/register', userData);
export const login = (userData) => api.post('/auth/login', userData);
export const adminLogin = (credentials) => api.post('/auth/admin-login', credentials);

// Admin
export const getDashboardStats = () => api.get('/admin/stats');
export const getAllContactQueries = () => api.get('/admin/queries');
export const updateQueryStatus = (queryId, status) => api.put(`/admin/queries/${queryId}`, { status });
export const getNewsletterSubscribers = () => api.get('/admin/newsletter/subscribers');

// Contact
export const submitContactForm = (formData) => api.post('/contact/submit', formData);
export const subscribeNewsletter = (email) => api.post('/contact/newsletter/subscribe', { email });
export const unsubscribeNewsletter = (email) => api.post('/contact/newsletter/unsubscribe', { email });

// Health check
export const healthCheck = () => api.get('/health');

export default api;
