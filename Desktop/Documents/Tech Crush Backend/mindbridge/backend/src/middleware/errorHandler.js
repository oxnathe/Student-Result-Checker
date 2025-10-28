const errorHandler = (err, req, res, next) => {
    console.error(err);

    // Sequelize validation error
    if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({
            success: false,
            message: err.errors[0].message
        });
    }

    // Sequelize unique constraint error (duplicate email/username)
    if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).json({
            success: false,
            message: 'Email or username already exists'
        });
    }

    // JWT errors
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }

    // Default server error
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
};


const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
};


export { errorHandler, notFound };
