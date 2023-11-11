const mongoose = require("mongoose");

const ministryOfHealthSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  contactNumber: { type: String },
  healthInstitutions: [
    { type: mongoose.Schema.Types.ObjectId, ref: "HealthInstitution" },
  ],
  analytics: [{ type: mongoose.Schema.Types.ObjectId, ref: "AnalyticsData" }],
});

const MinistryOfHealth = mongoose.model(
  "MinistryOfHealth",
  ministryOfHealthSchema
);

module.exports = MinistryOfHealth;
