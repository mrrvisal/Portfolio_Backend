const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contact');

router.get("/api/contacts", contactController.getAll);
router.post("/api/contact", contactController.create);

module.exports = router;