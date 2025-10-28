import { extractTokenFromHeader, verifyToken } from "../utils/token.js";

const authMiddleware = (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;
        const token = extractTokenFromHeader(authHeader);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. No token provided.'
            });
        }

        const decoded = verifyToken(token);
        req.user = decoded;
        next();



    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. Invalid token.'
        })
    }
}

export default authMiddleware;