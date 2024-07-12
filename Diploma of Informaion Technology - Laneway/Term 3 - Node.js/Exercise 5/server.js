const express = require('express')
const { createUser } = require('./database')
const path = require('path')
const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname)))

app.get('/', (req, res)  => res.sendFile(__dirname + "/index.html"))

app.post('/', (req, res) => {
    const { username, password, email } = req.body;
    console.log(username, password, email)
    createUser(username, password, email)
    res.sendFile(path.join(__dirname, '/pages/registered.html'));
})

app.listen(3000)
