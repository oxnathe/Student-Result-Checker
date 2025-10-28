import { validationResult } from 'express-validator';
import JournalEntry from '../models/JournalEntry.js';

export const addJournalEntry = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { content, emotionTags } = req.body;

    const entry = await JournalEntry.create({
      userId: req.user.id,
      content,
      emotionTags,
    });

    res.status(201).json({
      message: 'Journal entry added successfully',
      data: entry,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getJournalEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']],
    });

    res.status(200).json({
      message: 'User journal history fetched successfully',
      data: entries,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};