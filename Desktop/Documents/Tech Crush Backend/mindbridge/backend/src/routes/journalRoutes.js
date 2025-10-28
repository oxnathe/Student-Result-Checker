import express from 'express';
import { body } from 'express-validator';
import { addJournalEntry, getJournalEntries } from '../controllers/journalController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post(
  '/',
  authMiddleware,
  body('content').notEmpty().withMessage('Content is required'),
  addJournalEntry
);

router.get('/', authMiddleware, getJournalEntries);

export default router;