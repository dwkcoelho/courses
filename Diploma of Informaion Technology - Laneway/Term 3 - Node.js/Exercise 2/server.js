const express = require('express')
const app = express()

app.get('/', (req, res)  => res.send("<h1>Hello World!</h1>"))
app.get('/contact', (req, res) => res.send("<h1>Contact me at dwkcoelho@gmail.com</h1>"))
app.get('/about', (req, res) => res.sendFile(__dirname + "/index.html"))


app.listen(3000)

//nodemon server.js to keep it updanting.