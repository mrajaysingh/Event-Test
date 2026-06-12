import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    unique: true,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    enum: ['Comedy', 'Esports', 'Wedding', 'Corporate', 'College', 'Concert', 'Birthday', 'Brand', 'Product', 'Private'],
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventLocation: {
    type: String,
    required: true
  },
  numberOfGuests: {
    type: Number,
    required: true
  },
  budgetRange: {
    type: String,
    enum: ['Below 50K', '50K-1L', '1L-5L', '5L-10L', '10L+'],
    required: true
  },
  additionalRequirements: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['Booking Received', 'Under Review', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'],
    default: 'Booking Received'
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending'
  },
  paymentAmount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Booking', bookingSchema);
