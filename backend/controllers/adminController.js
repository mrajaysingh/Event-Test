import Booking from '../models/Booking.js';
import ContactQuery from '../models/ContactQuery.js';
import Newsletter from '../models/Newsletter.js';

export const getDashboardStats = async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const pendingBookings = await Booking.countDocuments({ status: 'Booking Received' });
    const confirmedBookings = await Booking.countDocuments({ status: 'Confirmed' });
    
    const totalRevenue = await Booking.aggregate([
      { $match: { paymentStatus: 'Completed' } },
      { $group: { _id: null, total: { $sum: '$paymentAmount' } } }
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalBookings,
        pendingBookings,
        confirmedBookings,
        totalRevenue: totalRevenue[0]?.total || 0
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats', error: error.message });
  }
};

export const getAllContactQueries = async (req, res) => {
  try {
    const queries = await ContactQuery.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      queries
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching queries', error: error.message });
  }
};

export const updateContactQueryStatus = async (req, res) => {
  try {
    const { queryId } = req.params;
    const { status } = req.body;

    const query = await ContactQuery.findByIdAndUpdate(
      queryId,
      { status },
      { new: true }
    );

    if (!query) {
      return res.status(404).json({ message: 'Query not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Query status updated',
      query
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating query', error: error.message });
  }
};

export const getNewsletterSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find({ isActive: true });

    res.status(200).json({
      success: true,
      count: subscribers.length,
      subscribers
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscribers', error: error.message });
  }
};
