import express from 'express';
import { getDashboardStats, getAllContactQueries, updateContactQueryStatus, getNewsletterSubscribers } from '../controllers/adminController.js';
import { verifyToken, verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/stats', verifyToken, verifyAdmin, getDashboardStats);
router.get('/queries', verifyToken, verifyAdmin, getAllContactQueries);
router.put('/queries/:queryId', verifyToken, verifyAdmin, updateContactQueryStatus);
router.get('/newsletter/subscribers', verifyToken, verifyAdmin, getNewsletterSubscribers);

export default router;
