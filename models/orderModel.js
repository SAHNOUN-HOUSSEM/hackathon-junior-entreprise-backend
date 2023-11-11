const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InventoryItem",
    required: true,
  },
  quantity: { type: Number },
  status: { type: String },
  deliveries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Delivery" }],
  healthInstitution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HealthInstitution",
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
