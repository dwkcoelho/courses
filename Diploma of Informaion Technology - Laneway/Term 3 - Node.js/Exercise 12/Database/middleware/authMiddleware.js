const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
    if (typeof roles === 'string') roles = [roles];

    return (req, res, next) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

        try {
            const decoded = jwt.verify(token, '123456');
            req.user = decoded;

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
