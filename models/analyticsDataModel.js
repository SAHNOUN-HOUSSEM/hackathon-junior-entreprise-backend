const mongoose = require("mongoose");

const analyticsDataSchema = new mongoose.Schema({
  ministryOfHealth: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MinistryOfHealth",
    required: true,
  },
  data: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const AnalyticsData = mongoose.model("AnalyticsData", analyticsDataSchema);

module.exports = AnalyticsData;
