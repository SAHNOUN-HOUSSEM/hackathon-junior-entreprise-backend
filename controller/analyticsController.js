const AnalyticsData = require("../models/analyticsDataModel");

const analyticsController = {
  // Route handler pour l'enregistrement des données analytiques
  recordAnalyticsData: async (req, res) => {
    try {
      const { data } = req.body;

      const analyticsData = new AnalyticsData({ data });
      await analyticsData.save();

      res
        .status(201)
        .json({ message: "Données analytiques enregistrées avec succès." });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erreur lors de l'enregistrement des données analytiques.",
      });
    }
  },

  // Route handler pour récupérer les données analytiques
  getAnalyticsData: async (req, res) => {
    try {
      const analyticsData = await AnalyticsData.find();

      res.status(200).json({ analyticsData });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erreur lors de la récupération des données analytiques.",
      });
    }
  },
};

module.exports = analyticsController;
