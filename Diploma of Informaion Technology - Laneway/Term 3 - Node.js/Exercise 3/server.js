const express = require('express')
const app = express()
//Acess data in the page
app.use(express.urlencoded({ extended: true}))

//Get
app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))

//Post
app.post("/", (req, res) => {
    const data = req.body
    const weight = data.weight
    const height = data.height

    res.send(`IBM: ${weight / (height ** 2)}`)

}) 

app.listen(3000)

//nodemon server.js to keep it updanting.
