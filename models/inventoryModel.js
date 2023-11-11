const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "InventoryItem" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
