const mongoose = require("mongoose");

const emergencyNotificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  urgencyLevel: { type: String },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  actionTaken: { type: String },
});

const EmergencyNotification = mongoose.model(
  "EmergencyNotification",
  emergencyNotificationSchema
);

module.exports = EmergencyNotification;
