const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String },
  birthdate: { type: Date },
  contactNumber: { type: String },
  specialization: { type: String },
  healthInstitution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HealthInstitution",
  },
  medicalRecords: [
    { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord" },
  ],
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
