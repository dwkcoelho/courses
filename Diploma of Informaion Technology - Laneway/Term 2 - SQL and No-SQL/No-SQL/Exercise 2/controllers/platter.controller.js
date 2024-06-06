const Platter = require("../models/platter.model.js");
//Create
const createPlatter = async (req, res) => {
    try {
        const createPlatter = await Platter.create(req.body);
        res.status(201).json({ createPlatter });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Read
const getPlatters = async (req, res) => {
    try {
        const getPlatters = await Platter.find();
        res.status(200).json({ getPlatters });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Read with id
const getPlatterById = async (req, res) => {
    try {
        const { id } = req.params;
        const getPlatterById = await Platter.findById(id);
        res.status(200).json({ getPlatterById });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Update
const updatePlatterById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatePlatterById = await Platter.findByIdAndUpdate(id, req.body);
        if (!updatePlatterById) {
            res.status(404).json({ message: "Platter not found" });
        } else {
            const updatePlatter = await Platter.findById(id);
            res.status(200).json(updatePlatter);
        }

    } catch (error) {
        res.status(500).json({ message: "Platter not updated" });
    }
};
//Delete
const deletePlatter = async (req, res) => {
    try {
        const { id } = req.params;
        await Platter.findByIdAndDelete(id);
        res.status(200).json({ message: "Platter deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Platter not deleted" });
    }
};


module.exports = { createPlatter, getPlatters, getPlatterById, updatePlatterById, deletePlatter };