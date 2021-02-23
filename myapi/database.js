const mysql = require('mysql');
/*const connection = mysql.createPool({
    host: 'localhost',
    user: 'netuser',
    password: 'netpass',
    database: 'netdb'
});*/

const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = connection;