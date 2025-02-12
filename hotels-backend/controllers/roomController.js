const Room = require("../models/Room");
const Hotel = require("../models/Hotel");

// Crear una nueva habitación
const createRoom = async (req, res) => {
  try {
    const room = new Room(req.body); // Crear la habitación
    const savedRoom = await room.save();
    res.status(201).json(savedRoom); // Devolver la habitación creada
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Asignar una habitación a un hotel
const assignRoomToHotel = async (req, res) => {
  const { hotelId } = req.params; // ID del hotel desde la URL
  const { roomId } = req.body; // ID de la habitación desde el cuerpo de la solicitud

  try {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ error: "Hotel no encontrado" });
    }

    // Agregar la habitación al hotel
    hotel.rooms.push(roomId);
    await hotel.save();

    res.status(200).json(hotel); // Devolver el hotel actualizado
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener detalles de una habitación (opcional, por si necesitas esta funcionalidad)
const getRoomDetails = async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: "Habitación no encontrada" });
    }

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRoom,
  assignRoomToHotel,
  getRoomDetails,
};
