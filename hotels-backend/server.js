require("dotenv").config(); // Variables de entorno
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const hotelRoutes = require("./routes/hotelRoutes");
const roomRoutes = require("./routes/roomRoutes");


const app = express();
connectDB(); // Conectar a MongoDB

app.use(cors());
app.use(express.json()); // Parseo JSON

// Rutas
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);


// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
