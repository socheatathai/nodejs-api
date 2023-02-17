const mysql = require("mysql");
// const database = mysql.createConnection({
//     host : "localhost",
//     database : "node_api",
//     user : "root",
//     password :""
// })
const database = mysql.createConnection({
    host : "bqre6fwkshoqmqvnkrfc-mysql.services.clever-cloud.com",
    database : "bqre6fwkshoqmqvnkrfc",
    user : "uhljnppe8u1tcubk",
    password :"uhljnppe8u1tcubk"
})
database.connect();
module.exports = database;