import User from "../models/user.js";
import { generateToken } from "../utils/token.js";
import { hashPassword } from '../utils/hashPass.js';



const register = async (req, res, next) => {
    try {
        // 1. Get data from request body
        const { username, email, password, isAnonymous = false } = req.body;

        // 2. Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'User already exists with this email'
            });
        }

        // 3. Hash the password
        const hashedPassword = await hashPassword(password);

        // 4. Create new user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            isAnonymous,
            role: 'user'
        });

        // 5. Generate JWT token
        const token = generateToken({
            id: newUser.id,
            email: newUser.email,
            role: newUser.role
        });

        // 6. Send success response
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token,
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        next(error);
    }
};

export default register;