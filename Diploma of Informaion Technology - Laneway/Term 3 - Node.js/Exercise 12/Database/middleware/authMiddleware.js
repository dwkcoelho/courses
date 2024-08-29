const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
    // Ensure roles is always an array, even if a single string is provided
    if (typeof roles === 'string') roles = [roles];

    return (req, res, next) => {
        // Extract the JWT token from the Authorization header
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

        try {
            // Verify and decode the token using the secret key
            const decoded = jwt.verify(token, '123456');
            req.user = decoded;
              // Check if the user's role is allowed; if not, deny access
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Access denied.' });
            }

            next();
        } catch (error) {
            res.status(400).json({ message: 'Invalid token.' });
        }
    };
};

module.exports = authMiddleware;
