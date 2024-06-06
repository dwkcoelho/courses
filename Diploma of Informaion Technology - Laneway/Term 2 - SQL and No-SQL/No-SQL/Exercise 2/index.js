//SETUP

//for express
const express = require("express");
//for mongoose driver
const mongoose = require("mongoose");
//for models
const Product = require("./models/product.model.js");
const Platter = require("./models/platter.model.js");
//for routes
const productRoutes = require("./routes/product.routes.js");
const platterRoutes = require("./routes/platter.routes.js");

//app is going to use express
const app = express();
//middleware to use JSON format
app.use(express.json());
//app port
const port = 3000;
//middleware to use static files
//static files
// app.use(express.static('public'));
//middleware to use routes
app.use("/api/products", productRoutes);
app.use("/api/platters", platterRoutes);

//mongoose connection code//
mongoose.connect("mongodb://127.0.0.1:27017/sushiBarRestaurant").then(() => {
    //show DB connection first//
    console.log("Connected to the database");
    app.listen(port, () => {
        //show app connection after DB connection//
        console.log("Server running on " + port);
    })
}).catch(() => {
    //show failed connection
    console.log("Connection failed");
});
