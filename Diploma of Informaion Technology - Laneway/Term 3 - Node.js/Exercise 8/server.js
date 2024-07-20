const https = require('https');
const express = require('express');
const app = express();
const { mailChimpKey } = require('./mailChimpKey'); // Import the API key from mailChimpKey.js

app.get('/send-email', (req, res) => {
    // Create the JSON payload with the API key and email details
    const data = JSON.stringify({
        key: mailChimpKey,
        message: {
            from_email: 'dwkcoelho@gmail.com',
            subject: 'MailChimp',
            text: 'Welcome to Mailchimp Transactional!',
            to: [
                {
                    email: 'dwkcoelho@gmail.com',
                    type: 'to'
                }
            ]
        }
    });

    // Define the options for the HTTPS request
    const options = {
        hostname: 'mandrillapp.com',
        port: 443,
        path: '/api/1.0/messages/send',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    // Create the HTTPS request
    const reqHttps = https.request(options, (resHttps) => {
        // Variable to store the response body
        let responseBody = '';

        // Listen for data events to collect chunks of the response body
        resHttps.on('data', (chunk) => {
            responseBody += chunk;
        });

        // Listen for the end event to log the full response body
        resHttps.on('end', () => {
            console.log('Response:', responseBody);
            res.send('Response: ' + responseBody);
        });
    });

    // Listen for error events to handle any errors during the request
    reqHttps.on('error', (error) => {
        console.error('Error:', error);
        res.status(500).send('Error: ' + error.message);
    });

    // Write the data (JSON payload) to the request body
    reqHttps.write(data);

    // End the request, signaling that no more data will be sent
    reqHttps.end();
});

// Start the Express server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
