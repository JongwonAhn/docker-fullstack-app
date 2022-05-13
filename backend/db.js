const mysql = require('mysql');
const pool = mysql.createPool({
   connectionLimit: 10,
   host: 'mysql',
   user: 'root',
   password: '1111',
   database: 'myapp'
});
//다른곳에서 pool을 사용해야하므로 exports
exports.pool = pool;

