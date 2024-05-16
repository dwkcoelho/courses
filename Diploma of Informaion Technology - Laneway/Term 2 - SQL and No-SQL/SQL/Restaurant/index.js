const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sushibarrestaurant'
});

// Connect to MySQL
connection.connect(error => {
    if (error) {
        return console.error('error: ' + error.message);
    }
    console.log('Connected to the MySQL server.');
});

//READ
function getSushiPlatters() {
    const sql = `SElECT name, total_pieces, sashimi.type AS sashimi, nigiri.type as nigiri, uramaki.type AS uramaki, maki.type AS maki, temaki.type AS temaki, garnish.type AS garnish, sauce.type AS sauce, price
    FROM sushi_platters
    INNER JOIN sashimi ON sashimi_id = sashimi.id
    INNER JOIN nigiri ON nigiri_id = nigiri.id
    INNER JOIN uramaki ON uramaki_id = uramaki.id
    INNER JOIN maki ON maki_id = maki.id
    INNER JOIN temaki ON temaki_id = temaki.id
    INNER JOIN garnish ON garnish_id = garnish.id
    INNER JOIN sauce ON sauce_id = sauce.id`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        console.log(results);
    });
}

//CREATE
function createSushiPlatter(name, total_pieces, sashimi_id, nigiri_id, uramaki_id, maki_id, temaki_id, garnish_id, sauce_id, price) {
    const sql = `INSERT INTO sushi_platters (name, total_pieces, sashimi_id, nigiri_id, uramaki_id, maki_id, temaki_id, garnish_id, sauce_id, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(sql, [name, total_pieces, sashimi_id, nigiri_id, uramaki_id, maki_id, temaki_id, garnish_id, sauce_id, price], (error, results) => {
        if (error) throw error;
        console.log(`Sushi Platter added with ID: ${results.insertId}`);
    });
}

//UPDATE
function updateSushiPLatter(id, name) {
    const sql = `UPDATE sushi_platters SET name = ? WHERE id = ?`;
    connection.query(sql, [name, id], (error, results) => {
        if (error) throw error;
        console.log(`Changed ${results.changedRows} row(s)`);
    });
}



//DELETE
function deleteSushiPlatter(id) {
    const sql = `DELETE FROM sushi_platters WHERE id = ?`;
    connection.query(sql, [id], (error, results) => {
        if (error) throw error;
        console.log(`Deleted ${results.affectedRows} row(s)`);
    });
}


getSushiPlatters()
// createSushiPlatter('Dragon Rol', 24, 1, 2, 3, 3, 5, 10, 7, 45.99)
//updateSushiPLatter(13, 'Dragon not Spicy')
//deleteSushiPlatter(12)