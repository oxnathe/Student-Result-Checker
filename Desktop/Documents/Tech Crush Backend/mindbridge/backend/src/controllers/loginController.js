import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";
import { comparePassword } from '../utils/hashPass.js';

const login = async (req, res, next) => {
    try {
        // 1. Get email and password from request body
        const { email, password } = req.body;

        // 2. Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // 3. Compare passwords
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // 4. Generate JWT token
        const token = generateToken({
            id: user.id,
            email: user.email,
            role: user.role
        });

        // 5. Send success response
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        next(error);
    }
};

export default login;
