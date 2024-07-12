const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'formlogin'
});

// Connect to MySQL
connection.connect(error => {
    if (error) {
        return console.error('error: ' + error.message);
    }
    console.log('Connected to the MySQL server.');
});

//READ
function getUsers() {
    const sql = `SElECT username, password, email FROM formlogin`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        console.log(results);
    });
}

//CREATE
function createUser(username, password, email) {
    const sql = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
    connection.query(sql, [username, password, email], (error, results) => {
        if (error) throw error;
        console.log(`New user added with ID: ${results.insertId}`);
    });
}

module.exports = {createUser};