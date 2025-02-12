const express = require("express");
const { getHotels, createHotel, getHotel } = require("../controllers/hotelController");
const router = express.Router();

router.get("/", getHotels); // Obtener todos los hoteles
router.get("/:hotelId", getHotel); // Obtener detalle de un hotel
router.post("/", createHotel); // Crear un nuevo hotel

module.exports = router;
