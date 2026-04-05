const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");
const projectRoute = require("./routes/project");
const educationRoute = require("./routes/education");
require("dotenv").config(); // load env
const app = express();
const pool = require("./config/config");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// Allow frontend
app.use(cors());

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(morgan("combined"));

// Test DB connection on startup
const db = require("./config/config");
(async () => {
  try {
    const connection = await db.getConnection();
    if (process.env.NODE_ENV !== "production")
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

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "healthy", message: "Backend ready" });
  } catch (err) {
    res
      .status(500)
      .json({ status: "unhealthy", message: "Database unavailable" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    result: false,
    msg: "Internal server error",
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  if (process.env.NODE_ENV !== "production")
    console.log(`Server running on port ${PORT}`);
});
