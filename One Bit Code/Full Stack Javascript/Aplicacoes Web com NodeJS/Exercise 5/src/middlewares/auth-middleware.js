const jwt = require("jsonwebtoken");
const usersModel = require("../models/users-model");

module.exports = {
    ensureAuth: (req, res, next) => {
        const authHeader = req.headers.authorization;

        if(!authHeader) return res.status(401).json({ message: "Acess denied!" });

        const token = authHeader.split(' ')[1];

        try {
            const { id } = jwt.verify(token, process.env.JWT_KEY);
            const user = usersModel.getUserById(id);
            if(!user) return req.status(401).json({ message: "User not found!" });
            req.user = user;
            next();
        } catch (error) {
            return req.status(401).json({ message: "Invalid token!" });
        }

    }
}