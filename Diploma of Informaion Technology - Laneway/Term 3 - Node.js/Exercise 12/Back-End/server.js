//Server
const { key } = require('./public/js/key');
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
//Database 
const mongoose = require("mongoose");
//Security
const cors = require("cors");
// const { v4: uuidv4 } = require('uuid');

app.use(cors({
  origin: ['http://localhost:3001'],
  methods: ['GET', 'POST']
}));

// Server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", async function (req, res) {
  try {
    const text = String(req.body.message);
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/profanityfilter',
      {
        params: { text },
        headers: {
          "X-Api-Key": key,
        },
      }
    );
    console.log(`Message: ${String(req.body.message)}`)
    const originalWords = response.data.original.split(" ");
    const censoredWords = response.data.censored.split(" ");
    let modifiedText = response.data.original;
    console.log(`Original Words: ${originalWords}`)

    // Finding inappropriate words by comparing original with censored
    const swearWords = originalWords.filter((word, index) => {
      return word !== censoredWords[index];
    });
    console.log(`Swear Word(s): ${swearWords}`)

    // Iterate over the swear words and replace them with a rhyming word
    for (const swearWord of swearWords) {
      try {
        // Get words that rhyme with the bad word
        const rhymeResponse = await axios.get(
          'https://api.api-ninjas.com/v1/rhyme',
          {
            params: { word: swearWord },
            headers: {
              "X-Api-Key": key,
            },
          }
        );

        // Select a random word from the suggested ones
        const rhymes = rhymeResponse.data;
        if (rhymes.length > 0) {
          const randomRhyme = rhymes[Math.floor(Math.random() * rhymes.length)].toUpperCase();
          modifiedText = modifiedText.replace(swearWord, randomRhyme);
          console.log(`Modified Text: ${modifiedText} \nOriginal Text: ${response.data.original}`);
        }
      } catch (rhymeError) {
        console.error(`Failed to find a rhyme for ${swearWord}:, rhymeError`);
      }
    }

    let answerPhrasesResponse;
    const politeParam = response.data.original === modifiedText;
    
    try {
      answerPhrasesResponse = await axios.get('http://localhost:3002/api/v1/answerPhrases', {
        params: { polite: politeParam },
      });
      
      const answerPhrases = answerPhrasesResponse.data.getAnswerPhrases;
      const phrases = answerPhrases.filter(p => p.polite === politeParam);
      console.log(phrases)
      const randomPhrase = phrases.length > 0 
        ? phrases[Math.floor(Math.random() * phrases.length)].phrase 
        : "No phrases found.";
      
      res.json({
        original: response.data.original,
        modified: modifiedText,
        phrase: randomPhrase
      });
    
    } catch (error) {
      console.error("Request failed:", error);
      res.status(500).send("An error occurred while processing your request.");
    }
  } catch (error) {
    console.error("Overall processing failed:", error);
    res.status(500).send("An error occurred while processing your request.");
  }
});

app.listen(port, function () {
  console.log(`Server Running on port ${port}`);
});