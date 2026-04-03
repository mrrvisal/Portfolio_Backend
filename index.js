const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");
const projectRoute = require("./routes/project");
const educationRoute = require("./routes/education");
require("dotenv").config(); // load env
const app = express();

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

// Health check for Render
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Global error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
