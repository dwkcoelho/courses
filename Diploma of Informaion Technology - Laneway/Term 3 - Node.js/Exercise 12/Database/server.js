// Server
const express = require("express");
const app = express();
const port = 3002;
// Database
const mongoose = require("mongoose");
const answerPhraseRoutes = require("./routes/answer-phrase.route.js");
const userRoutes = require("./routes/user.route.js");

app.use(express.json());

//Routes
app.use("/api/answerPhrases", answerPhraseRoutes);
app.use("/api/users", userRoutes);

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
