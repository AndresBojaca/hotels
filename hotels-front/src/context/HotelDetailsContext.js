import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const HotelDetailsContext = createContext();

export const HotelDetailsProvider = ({ hotelId, children }) => {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para obtener los detalles del hotel desde el backend
  const fetchHotel = async () => {
    try {
      const response = await api.get(`/hotels/${hotelId}`); // Llama al backend
      setHotel(response.data); // Guarda los datos del hotel
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los detalles del hotel:", error);
    }
  };

  // Función para agregar una habitación al hotel
  const addRoomToHotel = async (room) => {
    try {
      // Crear la habitación
      const response = await api.post("/rooms", room); // Crea la habitación
      const roomId = response.data._id;

      // Asignar la habitación al hotel
      await api.post(`/rooms/${hotelId}`, { roomId });

      // Actualizar los detalles del hotel
      fetchHotel();
    } catch (error) {
      console.error("Error al agregar la habitación:", error);
    }
  };

  useEffect(() => {
    fetchHotel(); // Cargar los datos del hotel al montar el componente
  }, [hotelId]);

  return (
    <HotelDetailsContext.Provider value={{ hotel, loading, addRoomToHotel }}>
      {children}
    </HotelDetailsContext.Provider>
  );
};
