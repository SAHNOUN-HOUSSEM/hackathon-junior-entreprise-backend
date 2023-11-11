const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  status: { type: String },
  estimatedArrival: { type: Date },
  actualArrival: { type: Date },
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
