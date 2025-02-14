import { useContext } from "react";
import { HotelDetailsContext } from "../context/HotelDetailsContext";
import RoomForm from "./RoomForm";

const HotelDetailsContent = () => {
  const { hotel, loading, addRoomToHotel } = useContext(HotelDetailsContext);

  if (loading) return <p>Cargando detalles del hotel...</p>;

  if (!hotel) return <p>No se encontraron detalles del hotel.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{hotel.name}</h1>
      <p><strong>Ubicación:</strong> {hotel.location}</p>
      <p><strong>Precio:</strong> ${hotel.price} por noche</p>

      <h2 className="text-xl font-bold mt-4">Habitaciones</h2>
      {hotel.rooms.length === 0 ? (
        <p>No hay habitaciones asignadas a este hotel.</p>
      ) : (
        <ul className="space-y-2">
          {hotel.rooms.map((room) => (
            <li key={room._id} className="border p-2">
              <p><strong>Tipo:</strong> {room.type}</p>
              <p><strong>Precio:</strong> ${room.cost}</p>
              <p><strong>Ubicación:</strong> {room.location}</p>
            </li>
          ))}
        </ul>
      )}

      <h2 className="text-xl font-bold mt-4">Agregar Habitación</h2>
      <RoomForm onRoomAdded={addRoomToHotel} />
    </div>
  );
};

export default HotelDetailsContent;
