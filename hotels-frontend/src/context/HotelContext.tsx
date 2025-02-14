import { createContext, useState, useEffect } from "react";
import { Hotel, HotelMongo } from "../libs/types"; // Importamos el tipo Hotel
import api from "../services/api"; // Importamos nuestra configuración de Axios

interface HotelContextType {
  hotels: Hotel[];
  addHotel: (hotel: Hotel) => void;
  updateHotel: ({ id, updatedHotel }: { id: number; updatedHotel: Hotel }) => void;
  deleteHotel: (id: number) => void;
}

export const HotelContext = createContext<HotelContextType>({
  hotels: [],
  addHotel: (hotel: Hotel) => {},
  updateHotel: (params: { id: number; updatedHotel: Hotel }) => {},
  deleteHotel: (id: number) => {},
});

import { ReactNode } from "react";

export const HotelProvider = ({ children }: { children: ReactNode }) => {
  const [hotels, setHotels] = useState<HotelMongo[]>([]);

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
  const addHotel = async (hotel: Hotel) => {
    try {
      const response = await api.post<Hotel>("/hotels", hotel); // Llama al endpoint POST del backend
      const newHotel: HotelMongo = { ...response.data }; // Convertir a HotelMongo
      setHotels((prevHotels) => [...prevHotels, newHotel]); // Agrega el nuevo hotel al estado
    } catch (error) {
      console.error("Error al agregar el hotel:", error);
    }
  };

  // Actualizar un hotel
  interface UpdateHotelParams {
    id: number;
    updatedHotel: Hotel;
  }

  const updateHotel = async ({ id, updatedHotel }: UpdateHotelParams) => {
    try {
      const response = await api.put<Hotel>(`/hotels/${id}`, updatedHotel); // Llama al endpoint PUT del backend
      setHotels((prevHotels) =>
        prevHotels.map((hotel) => (hotel._id === id ? response.data : hotel))
      ); // Actualiza el estado con los datos modificados
    } catch (error) {
      console.error("Error al actualizar el hotel:", error);
    }
  };

  // Eliminar un hotel
  const deleteHotel = async (id: number) => {
    try {
      await api.delete(`/hotels/${id}`); // Llama al endpoint DELETE del backend
      setHotels((prevHotels) => prevHotels.filter((hotel) => hotel._id !== id)); // Quita el hotel eliminado
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
