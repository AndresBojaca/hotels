const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  baseCost: { type: Number, required: true }, // Precio base
  taxes: { type: Number, default: 0 }, // Impuestos adicionales
  type: { type: String, required: true }, // Ejemplo: Single, Double, Suite
  isAvailable: { type: Boolean, default: true }, // Disponible para reserva
  roomLocation: { type: String, required: true }, // Ubicación (Ej: Piso 2)
  location: { type: String, required: true }, // Ubicación (Ej: Piso 2)
});

module.exports = mongoose.model("Room", RoomSchema);
