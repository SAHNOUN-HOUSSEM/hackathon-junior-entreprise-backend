const express = require("express");
const router = express.Router();
const analyticsController = require("../controller/analyticsController");

// Routes pour les fonctionnalités liées à l'analyse des données
router.post("/", analyticsController.recordAnalyticsData);
router.get("/", analyticsController.getAnalyticsData);

module.exports = router;
