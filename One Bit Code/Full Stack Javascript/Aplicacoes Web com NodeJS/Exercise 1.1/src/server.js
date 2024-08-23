const express = require("express");
const path = require("node:path");
const router = require("./routes");

const app = express();

//EJS configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Static files configuration
app.use(express.static('public'));

//Read request data configuration
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The server is running on PORT http://localhost:${PORT}/`));