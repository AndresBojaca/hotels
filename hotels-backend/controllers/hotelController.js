const Hotel = require("../models/Hotel");

// Obtener todos los hoteles
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener detalle de un hotel
const getHotel = async (req, res) => {
  const { hotelId } = req.params;
  try {
    const hotel = await Hotel.findById(hotelId).populate("rooms");
    if (!hotel) {
      return res.status(404).json({ error: "Hotel no encontrado" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo hotel
const createHotel = async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    const hotel = await newHotel.save();
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getHotels, getHotel, createHotel };
