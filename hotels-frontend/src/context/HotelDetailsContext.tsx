import { createContext, useState, useEffect } from "react";
import { Hotel } from "../libs/types";
import api from "../services/api";

interface Room {
  name: string;
  price: number;
}

export const HotelDetailsContext = createContext({
  hotel: {} as Hotel,
  loading: true,
  addRoomToHotel: async (room: Room) => {},
});

interface HotelDetailsProviderProps {
  hotelId: string | undefined;
  children: React.ReactNode;
}

export const HotelDetailsProvider = ({ hotelId, children }: HotelDetailsProviderProps) => {
  const [hotel, setHotel] = useState<Hotel>({} as Hotel);
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
  interface Room {
    name: string;
    price: number;
  }

  const addRoomToHotel = async (room: Room): Promise<void> => {
    try {
      // Crear la habitación
      const response = await api.post<{ _id: string }>("/rooms", room); // Crea la habitación
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
