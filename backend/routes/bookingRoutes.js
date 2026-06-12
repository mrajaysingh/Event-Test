import express from 'express';
import { createBooking, getBooking, getAllBookings, updateBookingStatus, deleteBooking } from '../controllers/bookingController.js';
import { verifyToken, verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/create', createBooking);
router.get('/track', getBooking);

// Admin routes
router.get('/all', verifyToken, verifyAdmin, getAllBookings);
router.put('/:bookingId/status', verifyToken, verifyAdmin, updateBookingStatus);
router.delete('/:bookingId', verifyToken, verifyAdmin, deleteBooking);

export default router;
