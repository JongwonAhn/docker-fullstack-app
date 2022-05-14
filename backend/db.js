const mysql = require('mysql');
const pool = mysql.createPool({
   connectionLimit: 10,
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_DATABASE,
   port : process.env.MYSQL_PORT
});
//다른곳에서 pool을 사용해야하므로 exports
exports.pool = pool;

