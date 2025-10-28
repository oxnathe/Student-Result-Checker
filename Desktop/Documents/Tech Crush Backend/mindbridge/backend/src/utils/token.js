import jwt from "jsonwebtoken";

// Function to generate a JWT
export const generateToken = (payload) => {
    // jwt.sign creates a signed token using our secret key from environment variables
    // expiresIn defines how long the token is valid (7 days here)
    return jwt.sign(
        payload,
        process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token) => {
    try {
        // Decode and verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded; // Returns { id, email, role, iat, exp }
    } catch (error) {
        // Token is invalid, expired, or malformed
        throw new Error('Invalid or expired token');
    }
};


export const extractTokenFromHeader = (authHeader) => {
    // Check if Authorization header exists
    if (!authHeader) {
        return null;
    }

    // Split "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." into parts
    const parts = authHeader.split(' ');

    // Must have exactly 2 parts: ["Bearer", "actual-token"]
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return null;
    }

    return parts[1]; // Return just the token part
};
