const mysql = require("mysql2/promise");

// الاتصال بالداتا بيز (البيانات من ملف .env)
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = db;
