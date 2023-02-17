const mysql = require("mysql");
const database = mysql.createConnection({
    host : "localhost",
    database : "node_api",
    user : "root",
    password :""
})
database.connect();
module.exports = database;