const express = require('express')
const app = express()
//Acess data in the page
app.use(express.urlencoded({ extended: true}))

//Get
app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))

// Post
app.post("/", (req, res) => {
    const data = req.body
    const firstNumber = Number(data.firstNumber)
    const secondNumber = Number(data.secondNumber)
    const operation = data.operation

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber
            break;
        case '-':
            result = firstNumber - secondNumber
            break;
        case '/':
            result = firstNumber / secondNumber
            break;
        case '*':
            result = firstNumber * secondNumber
            break;
        default:
            result = 'Invalid operation'
    }

    res.send(`${firstNumber} ${operation} ${secondNumber} = ${result}`)

}) 

app.listen(3000)