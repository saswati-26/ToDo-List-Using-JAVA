const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Rims@1984',
    database: 'mydb'
});

module.exports = dbConnection.promise();