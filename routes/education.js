const express = require("express");
const router = express.Router();
const educationController = require("../controllers/education");

router.get("/api/educations", educationController.getAll);

module.exports = router;
