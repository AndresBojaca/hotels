const express = require("express");
const {
  createRoom,
  assignRoomToHotel,
  getRoomDetails,
} = require("../controllers/roomController");

const router = express.Router();

// Crear una nueva habitación
router.post("/", createRoom);

// Asignar una habitación a un hotel
router.post("/:hotelId", assignRoomToHotel);

// Obtener detalles de una habitación (opcional)
router.get("/:roomId", getRoomDetails);

module.exports = router;
