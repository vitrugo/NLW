// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : '',
//   password : '',
//   database : ''
// });
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();









const Database = require('sqlite-async');
 
function execute (db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `);
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)