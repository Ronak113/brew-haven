const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to the database:', err);
  } else {
    console.log('✅ Connected to the MySQL database.');
  }
});

db.query("SELECT DATABASE() AS db", (err, result) => {
  console.log("👉 Using DB:", result[0].db);
});


module.exports = db;
