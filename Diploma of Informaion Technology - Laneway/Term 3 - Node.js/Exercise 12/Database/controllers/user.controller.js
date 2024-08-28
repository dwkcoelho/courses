const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/user.model.js");

//Login
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, '123456', {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//Create
const createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = new User ({ username, password, role: role || "user" });
        await user.save();
        res.status(201).json({ message: "User registered successfully" }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//Read 
const getUsers = async (req, res) => {
    try {
        const getUsers = await User.find();
        res.status(200).json({ getUsers });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//Read with id
const getUserById = async (req, res) => {
    try {
        const { id } = req.body;
        const getUserById = await User.findById(id);
        res.status(200).json({ getUserById });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}
//Update
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUserById = await User.findByIdAndUpdate(id, req.body);
        if (!updateUserById) {
            res.status(404).json({ message: "User not found!" });
        } else {
            const updateUser = await User.findById(id);
            res.status(200).json(updateUser);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//Delete
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json( {message: "User deleted sucessfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { loginUser, createUser, getUsers, getUserById, updateUserById, deleteUser };