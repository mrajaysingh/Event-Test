import express from 'express';
import { submitContactForm, subscribeNewsletter, unsubscribeNewsletter } from '../controllers/contactController.js';

const router = express.Router();

router.post('/submit', submitContactForm);
router.post('/newsletter/subscribe', subscribeNewsletter);
router.post('/newsletter/unsubscribe', unsubscribeNewsletter);

export default router;
