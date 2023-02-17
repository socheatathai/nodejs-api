const mysql = require("mysql");
// const database = mysql.createConnection({
//     host : "localhost",
//     database : "node_api",
//     user : "root",
//     password :""
// })
const database = mysql.createConnection({
    host : "bdesxd42xh1le52or8r6-mysql.services.clever-cloud.com",
    database : "bdesxd42xh1le52or8r6",
    user : "uwe49ulkiznrsjev",
    password :"uwe49ulkiznrsjev"
})
database.connect();
module.exports = database;