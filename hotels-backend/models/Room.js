const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Ejemplo: Single, Double, Suite
  cost: { type: Number, required: true }, // Precio base
  taxes: { type: Number, default: 0 }, // Impuestos adicionales
  isAvailable: { type: Boolean, default: true }, // Disponible para reserva
  location: { type: String, required: true }, // Ubicación (Ej: Piso 2)
});

module.exports = mongoose.model("Room", RoomSchema);
