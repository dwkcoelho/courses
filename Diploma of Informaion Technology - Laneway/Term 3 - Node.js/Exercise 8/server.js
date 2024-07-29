const https = require('https');
const axios = require('axios');
const path = require('node:path'); 
const express = require('express');
const app = express();
const { key } = require('./mailChimpKey'); 

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/', async (req, res) => {
    const { firstName, lastName, email } = req.body;

    try {
        const response = await axios.post(
            "https://us14.api.mailchimp.com/3.0/lists/bf260a56fa/members",
            {
                email_address: email,
                status: "pending",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${key}`,
                    "Content-Type": "application/json",
                },
            }
        );
        res.status(200).send("Subscription successful!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Subscription failed.");
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
