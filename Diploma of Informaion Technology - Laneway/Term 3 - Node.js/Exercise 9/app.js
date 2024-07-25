const express = require('express')
const app = express()
const mysql = require('mysql2')

app.use(express.urlencoded({ extended:true }))
app.use(express.json())

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'students'
});

// Connect to MySQL
connection.connect(error => {
    if (error) {
        return console.error('error: ' + error.message);
    }
    console.log('Connected to the MySQL server.');
});

app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    connection.query(sql, (error, results) => {
        if(error) throw error
        res.json(results)
    })
})

app.get('/students/:id', (req, res) => {
    const sql = `SELECT fullname, birthyear, email FROM students WHERE id = ?`;
    connection.query(sql, [req.params.id], (error, results) => {
        if(error) throw error;
        res.json(results)
    })
})

app.post('/students', (req, res) => {
    const { fullname, birthyear, email } = req.body

    const sql = `INSERT INTO students (fullname, birthyear, email) VALUES (?, ?, ?)`
    connection.query(sql, [fullname, birthyear, email], (error, results) => {
        if (error) throw error;
    })
    res.send()
})

app.put('/students/:id', (req, res) => {
    const { fullname, birthyear, email } = req.body
    const sql = `UPDATE students SET fullname = ?, birthyear = ?, email = ? WHERE id = ?`;
    connection.query(sql, [fullname, birthyear, email, req.params.id], (error, results) => {
        if (error) throw error;
        res.json(`Changed ${results.changedRows} row(s)`);
    })
})

app.patch('/students/:id', (req, res) => {
    const { email } = req.body
    console.log(email)
    const sql = `UPDATE students SET email = ? WHERE id = ?`;
    connection.query(sql, [email, req.params.id], (error, results) => {
        if (error) throw error;
        res.json(`Changed ${results.changedRows} row(s)`);
    })
})

app.delete('/students/:id', (req, res) => {
    const sql = `DELETE FROM students WHERE id = ?`;
    connection.query(sql, [req.params.id], (error, results) => {
        if (error) throw error;
        res.json(`Deleted ${results.affectedRows} row(s)`);
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})