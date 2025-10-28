import bcrypt from "bcryptjs";

// Hash password function
export const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(12); // Generate salt with 12 rounds (more secure)
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

// Compare password function
export const comparePassword = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Error comparing password');
    }
};



