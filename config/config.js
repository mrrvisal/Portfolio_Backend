require("dotenv").config(); // load env
const path = require("path");
const fs = require("fs");
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 20000,
  ssl: {
    ca: fs.readFileSync(path.resolve(__dirname, process.env.DB_CA_PATH)),
    rejectUnauthorized: true,
  },
});

module.exports = pool;
