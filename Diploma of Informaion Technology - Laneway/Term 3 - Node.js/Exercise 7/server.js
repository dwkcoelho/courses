const express = require('express')
const app = express()
const path = require('node:path')
const https = require('node:https')
const { key } = require('./key')

app.use(express.static(path.join(__dirname)))
app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.post('/', (req, res) => {
    const { zipcode } = req.body;

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},au&appid=${key}`;

    https.get(url, (response) => {
        let weatherData = '';

        response.on('data', (data) => {
            weatherData += data;
        });

        response.on('end', () => {
            const weather = JSON.parse(weatherData);
            console.log(weather);
            res.send({ weatherData: weather }); 
        });
    }).on('error', (error) => {
        console.error(`Error fetching weather data: ${error.message}`);
        res.status(500).send('Error fetching weather data'); // Handle errors
    });
});


app.listen(3000)