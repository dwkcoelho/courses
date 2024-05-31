const Product = require("../models/product-model.js");
//Create
const createProduct = async (req, res) => {
    try {
        const createProduct = await Product.create(req.body);
        res.status(201).json({ createProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Read
const getProducts = async (req, res) => {
    try {
        const getProducts = await Product.find();
        res.status(200).json({ getProducts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Read with id
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const getProductById = await Product.findById(id);
        res.status(200).json({ getProductById });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Update
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const updateProductById = await Product.findByIdAndUpdate(id, req.body);
        if (!updateProductById) {
            res.status(404).json({ message: "Product not found" });
        } else {
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
        }

    } catch (error) {
        res.status(500).json({ message: "Product not updated" });
    }
};
//Delete
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Product not deleted" });
    }
};


module.exports = { createProduct, getProducts, getProduct, updateProduct, deleteProduct };