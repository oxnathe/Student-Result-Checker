import express from 'express';
const router = express.Router();
import register from '../controllers/registeControllerr.js';
import login from '../controllers/loginController.js';

// Define routes
router.post('/register', register);
router.post('/login', login);

export default router;
