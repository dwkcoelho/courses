const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'LANEWAY123*',
    database: 'melbclass3'
});

// Connect to MySQL
connection.connect(error => {
    if (error) {
        return console.error('error: ' + error.message);
    }
    console.log('Connected to the MySQL server.');
});

//READ
function getMovie() {
    const sql = `SELECT * FROM movies`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        console.log(results);
    });
}

//CREATE
function createMovie(title, release_date) {
    const sql = `INSERT INTO movies (title, release_date) VALUES (?, ?)`;
    connection.query(sql, [title, release_date], (error, results) => {
        if (error) throw error;
        console.log(`Book added with ID: ${results.insertId}`);
    });
}

//UPDATE
function updateMovie(id, title) {
    const sql = `UPDATE movies SET title = ? WHERE id = ?`;
    connection.query(sql, [title, id], (error, results) => {
        if (error) throw error;
        console.log(`Changed ${results.changedRows} row(s)`);
    });
}

// Example usage
//updateMovie(1, 'Shogun');


//DELETE
function deleteMovie(id) {
    const sql = `DELETE FROM movies WHERE id = ?`;
    connection.query(sql, [id], (error, results) => {
        if (error) throw error;
        console.log(`Deleted ${results.affectedRows} row(s)`);
    });
}

// Example usage

getMovie();