const express = require('express');
const path = require('node:path');
const app = express();
const port = 3000;

//EJS configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ urlencoded: true }));
app.use(express.static('public'));

let emails = [];

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/signup', (req, res) => {
    const { email } = req.body;

    if(email) {
        emails.push(email);
        res.redirect('/success');
    } else {
        res.redirect('/');
    }
})

app.get('/success', (req, res) => {
    res.render('success');
})

app.get('/emails', (req, res) => {
    res.render('emails', { emails: emails })
})

app.post('/emails/delete', (req, res) => {
    const { email } = req.body;
    emails = emails.filter(item => item !== email);
    res.redirect('/emails');
})

app.listen(port, () => console.log(`Server is running on port ${port} `));