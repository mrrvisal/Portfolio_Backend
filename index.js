const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");
const projectRoute = require("./routes/project");
const educationRoute = require("./routes/education");
require("dotenv").config(); // load env
const app = express();
const pool = require("./config/config");

// Allow frontend
app.use(cors());

app.use(express.json());

// Test DB connection on startup
const db = require("./config/config");
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("DB connected successfully");
    connection.release();
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  }
})();

app.use(contactRoute);
app.use(projectRoute);
app.use(educationRoute);

app.get("/", async (req, res) => {
  try {
    // 1. Query database FIRST
    const [rows] = await pool.query("SELECT * FROM educations");

    // 2. Send ONE response with the data
    res.json({
      message: "Hello World",
      data: rows,
      count: rows.length,
    });
  } catch (err) {
    console.error("Query error:", err);
    // 3. Send error response ONLY if not already sent
    res.status(500).json({ error: "Fetch failed", message: err.message });
  }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
