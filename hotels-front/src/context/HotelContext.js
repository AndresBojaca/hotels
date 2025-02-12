import { createContext, useState, useEffect } from "react";
import api from "../services/api"; // Importamos nuestra configuración de Axios

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  // Cargar los hoteles desde el backend
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await api.get("/hotels"); // Llama al backend para obtener los hoteles
        setHotels(response.data); // Actualiza el estado global
      } catch (error) {
        console.error("Error al obtener los hoteles:", error);
      }
    };

    fetchHotels();
  }, []);

  // Crear un hotel nuevo
  const addHotel = async (hotel) => {
    try {
      const response = await api.post("/hotels", hotel); // Llama al endpoint POST del backend
      setHotels((prevHotels) => [...prevHotels, response.data]); // Agrega el nuevo hotel al estado
    } catch (error) {
      console.error("Error al agregar el hotel:", error);
    }
  };

  // Actualizar un hotel
  const updateHotel = async (id, updatedHotel) => {
    try {
      const response = await api.put(`/hotels/${id}`, updatedHotel); // Llama al endpoint PUT del backend
      setHotels((prevHotels) =>
        prevHotels.map((hotel) => (hotel.id === id ? response.data : hotel))
      ); // Actualiza el estado con los datos modificados
    } catch (error) {
      console.error("Error al actualizar el hotel:", error);
    }
  };

  // Eliminar un hotel
  const deleteHotel = async (id) => {
    try {
      await api.delete(`/hotels/${id}`); // Llama al endpoint DELETE del backend
      setHotels((prevHotels) => prevHotels.filter((hotel) => hotel.id !== id)); // Quita el hotel eliminado
    } catch (error) {
      console.error("Error al eliminar el hotel:", error);
    }
  };

  return (
    <HotelContext.Provider
      value={{
        hotels,
        addHotel,
        updateHotel,
        deleteHotel,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};
