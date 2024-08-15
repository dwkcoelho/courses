// Server
const express = require("express");
const app = express();
const port = 3002;
// Security
const { v4: uuidv4 } = require('uuid');
// Database
const mongoose = require("mongoose");
const AnswerPhrase = require("./models/answer-phrase.model");
const answerPhraseRoutes = require("./routes/answer-phrase.route");

app.use(express.json());
//Database
app.use("/api/answerPhrases", answerPhraseRoutes);
//mongoose connection code//
mongoose.connect("mongodb://127.0.0.1:27017/answerPhrase").then(() => {
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
