const express = require('express');
const axios = require('axios');
const path = require('node:path');
const { key } = require('./key');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

// Route to check for profanity
app.post('/check-profanity', async (req, res) => {
    const text = req.body.text;
  
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/profanityfilter', {
        params: { text: encodeURIComponent(text) },
        headers: { 'X-Api-Key': key }
      });
  
      return res.send(response.data);
    } catch (error) {
      console.error('Request failed:', error);
  
      if (error.response) {
        return res.status(error.response.status).send(error.response.data);
      } else {
        return res.status(500).send('Internal Server Error');
      }
    }
});

app.post('/rhyme', async (req, res) => {
    const text = req.body.text;

    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/rhyme?word=' + text, {
            params: { text: encodeURIComponent(text) },
            headers: { 'X-Api-Key': key }
        });

        return res.send(response.data);
    } catch (error) {
        console.error('Request failed:', error);

        if (error.response) {
            return res.status(error.response.status).send(error.response.data);
        } else {
            return res.status(500).send('Internal Server Error')
        }
    }
})


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
