const express = require("express");
const router = express.Router();
const {createProduct,getProducts, getProduct,updateProduct, deleteProduct} = require("../controllers/product.controller.js")


router.post("/createProduct", createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router;