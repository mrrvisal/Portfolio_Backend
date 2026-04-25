const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contact');

router.post("/api/contact", contactController.create);

module.exports = router;