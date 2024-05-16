//npm install express
//npm install mongodb
//npx nodemon

// Declare express as a webserver
const express = require('express');
// Connect with webserver express
const app = express();
// Declare a MongoDb Client driver / {} new Mongo Client all time.
const {MongoClient} = require('mongodb');
// Declare host and port
const port = 3000;
const host = 'http://127.0.0.1' + port;

// MongoDb connection
const mongodburl = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(mongodburl);

// Function to connect automatically
let db = null;
(async function connect (database = 'salesdb', collection = 'sales') {
    try {
        const conn = await client.connect();
        const dbconn = await conn.db(database);
        db = await dbconn.collection(collection);
    } catch (error) {
        console.log(error);
    };
    return null;
})() //On init initialise function

// API requests

// Get '/' the basic root from my library, request and send me a result.
app.get(`/`, (req, res) => {
    res.send('Hello World!');
})

// Read
app.get('/sales', async (req, res) => {
    // Get the data from database
    const result = await db.find().toArray();
    // Show me the data
    res.send(result)
})

// app.get('/employees', async(req, rest) => {
//     const result = await db.find().toArray();
//     res.send(result)
// })

// Read with filter
app.get('/sales/quantity/:id', async (req, res) => {
    //Filter the data you want to bring
    let id = Number(req.params.id);
    const result = await db.find({"quantity":id}).toArray();
    res.send(result)
})

// app.get('/sales/quantity/:id', async (req, res) => {
//     let id = Number(req.params.id);
//     const result = await.db.find({"items.quantity": { $gt:id}}).toArray();
//     res.send(result)
// })

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})