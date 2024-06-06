const express = require("express");
const router = express.Router();
const {createPlatter, getPlatters, getPlatterById, updatePlatterById, deletePlatter} = require("../controllers/platter.controller.js")


router.post("/createPlatter", createPlatter);
router.get("/", getPlatters);
router.get("/:id", getPlatterById);
router.patch("/:id", updatePlatterById);
router.delete("/:id", deletePlatter);


module.exports = router;