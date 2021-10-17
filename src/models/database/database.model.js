const mysql = require("mysql");
const config = require("../../config/config");

// create a connection to the database
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});

// open the MySQL connection
connection.connect(error => {
    // if (error) throw new Error('Connection failed');
    console.log("Successfully connected to the database.");
});

module.exports = connection;