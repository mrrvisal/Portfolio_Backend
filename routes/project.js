const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project");

router.get("/api/projects", projectController.getAll);

module.exports = router;
