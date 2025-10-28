import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import journalRoutes from './src/routes/journalRoutes.js';
import authMiddleware from './src/middleware/auth.js';
import { notFound, errorHandler } from './src/middleware/errorHandler.js';
import { connectDB } from './src/config/db.js';

const app = express();

dotenv.config();
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRoutes); //routes
app.use('/api/v1/journal', authMiddleware, journalRoutes);

app.use(notFound);      // 404 handler
app.use(errorHandler);  // Error handler (must be last)

const PORT = process.env.PORT || 3000;

// Test database connection and start server

const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

startServer();