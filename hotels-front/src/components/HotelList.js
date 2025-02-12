import { useContext } from "react";
import { Link } from "react-router-dom";
import { HotelContext } from "../context/HotelContext";

const HotelList = () => {
  const { hotels, deleteHotel } = useContext(HotelContext);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Lista de Hoteles</h2>
      {hotels.length === 0 ? (
        <p>No hay hoteles registrados.</p>
      ) : (
        <ul className="space-y-2">
          {hotels.map((hotel) => (
            <li key={hotel._id} className="border p-2 flex justify-between items-center">
              <div>
                <p className="font-bold">{hotel.name}</p>
                <p>{hotel.location}</p>
                <p>${hotel.price} por noche</p>
              </div>
              <div className="space-x-2">
                {/* Link para ir a la página de detalles del hotel */}
                <Link
                  to={`/hotel/${hotel._id}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Ver Detalles
                </Link>
                <button
                  onClick={() => deleteHotel(hotel._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelList;
