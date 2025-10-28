import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const JournalEntry = sequelize.define('JournalEntry', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  emotionTags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default JournalEntry;
