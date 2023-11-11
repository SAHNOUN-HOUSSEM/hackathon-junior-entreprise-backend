const mongoose = require("mongoose");

const healthInstitutionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  location: { type: String },
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
  inventories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Inventory" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const HealthInstitution = mongoose.model(
  "HealthInstitution",
  healthInstitutionSchema
);

module.exports = HealthInstitution;
