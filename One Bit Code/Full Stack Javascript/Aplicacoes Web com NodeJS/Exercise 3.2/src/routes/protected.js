const express = require("express");
const authMiddleware = require("../../middlewares/auth-middleware");

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    const username = req.authenticatedUser.username;
    res.json({ message: `Protected area! Welcome ${username}` });
})

module.exports = protectedRouter;