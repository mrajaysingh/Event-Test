import { v4 as uuidv4 } from 'uuid';

export const generateBookingId = () => {
  return 'ORY-' + Date.now() + '-' + uuidv4().slice(0, 8).toUpperCase();
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
};
