import ContactQuery from '../models/ContactQuery.js';
import Newsletter from '../models/Newsletter.js';
import { sendContactReplyEmail } from '../utils/email.js';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message, type } = req.body;

    const contactQuery = new ContactQuery({
      name,
      email,
      phone,
      subject,
      message,
      type: type || 'General',
      status: 'New'
    });

    await contactQuery.save();

    // Send auto-reply email
    await sendContactReplyEmail(
      email,
      name,
      subject,
      'Thank you for contacting ORYZENE. Our team will get back to you soon.'
    );

    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will contact you soon.'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
};

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Already subscribed' });
    }

    const subscriber = new Newsletter({
      email,
      isActive: true
    });

    await subscriber.save();

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error subscribing', error: error.message });
  }
};

export const unsubscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const subscriber = await Newsletter.findOneAndUpdate(
      { email },
      { isActive: false },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error unsubscribing', error: error.message });
  }
};
