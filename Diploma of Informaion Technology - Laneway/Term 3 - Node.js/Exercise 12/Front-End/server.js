const path = require("node:path")
const express = require("express");
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname)));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, function () {
  console.log(`Server Running on port ${port}`);
});