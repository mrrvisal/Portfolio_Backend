require("dotenv").config(); // load env
const path = require("path");
const fs = require("fs");
const mysql = require("mysql2/promise");

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });

const pool = mysql.createPool({
  host: process.env.TIDB_HOST,
  port: parseInt(process.env.TIDB_PORT, 10),
  user: process.env.TIDB_USER,
  password: process.env.TIDB_PASSWORD,
  database: process.env.TIDB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 20000,
  ssl: {
    ca: fs.readFileSync(path.resolve(__dirname, process.env.TIDB_CA_PATH)),
    rejectUnauthorized: true,
  },
});

module.exports = pool;
