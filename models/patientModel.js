const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String },
  birthdate: { type: Date },
  contactNumber: { type: String },
  address: { type: String },
  medicalRecords: [
    { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord" },
  ],
  emergencyNotifications: [
    { type: mongoose.Schema.Types.ObjectId, ref: "EmergencyNotification" },
  ],
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
