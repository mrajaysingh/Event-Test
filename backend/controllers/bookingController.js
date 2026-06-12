import Booking from '../models/Booking.js';
import { generateBookingId, validateEmail, validatePhone } from '../utils/validators.js';
import { sendBookingConfirmationEmail } from '../utils/email.js';

export const createBooking = async (req, res) => {
  try {
    const { fullName, email, phone, eventType, eventDate, eventLocation, numberOfGuests, budgetRange, additionalRequirements } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!validatePhone(phone)) {
      return res.status(400).json({ message: 'Invalid phone number' });
    }

    const bookingId = generateBookingId();

    const booking = new Booking({
      bookingId,
      fullName,
      email,
      phone,
      eventType,
      eventDate: new Date(eventDate),
      eventLocation,
      numberOfGuests,
      budgetRange,
      additionalRequirements,
      status: 'Booking Received',
      paymentStatus: 'Pending'
    });

    await booking.save();

    // Send confirmation email
    await sendBookingConfirmationEmail(booking);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      bookingId: booking.bookingId,
      booking
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
};

export const getBooking = async (req, res) => {
  try {
    const { bookingId, email } = req.query;

    if (!bookingId || !email) {
      return res.status(400).json({ message: 'Booking ID and email are required' });
    }

    const booking = await Booking.findOne({ bookingId, email });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({
      success: true,
      booking
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching booking', error: error.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const { status, eventType, search } = req.query;
    let filter = {};

    if (status) filter.status = status;
    if (eventType) filter.eventType = eventType;
    if (search) {
      filter.$or = [
        { bookingId: { $regex: search, $options: 'i' } },
        { fullName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const bookings = await Booking.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { status } = req.body;

    const booking = await Booking.findOneAndUpdate(
      { bookingId },
      { status, updatedAt: new Date() },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Booking status updated',
      booking
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking', error: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findOneAndDelete({ bookingId });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting booking', error: error.message });
  }
};
