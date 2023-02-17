const mysql = require("mysql");
// const database = mysql.createConnection({
//     host : "localhost",
//     database : "node_api",
//     user : "root",
//     password :""
// })
const database = mysql.createConnection({
    host : "bqltdxftggqbrnaij7zt-mysql.services.clever-cloud.com",
    database : "bqltdxftggqbrnaij7zt",
    user : "ub2lhdhtlbaixyxv",
    password :"QvY1gCUB6FjBfM5LGKtf"
})
database.connect();
module.exports = database;