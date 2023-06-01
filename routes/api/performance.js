const express = require("express");
const router = express.Router();
const performanceController = require("../../controllers/performanceController");

router.route("/").post(performanceController.createVisit);

module.exports = router;
