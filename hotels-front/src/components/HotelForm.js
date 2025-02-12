import { useState, useContext } from "react";
import { HotelContext } from "../context/HotelContext";

const HotelForm = () => {
  const { addHotel } = useContext(HotelContext);
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    price: "",
  });

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hotel.name && hotel.location && hotel.price) {
      addHotel(hotel); // Llama a addHotel del contexto
      setHotel({ name: "", location: "", price: "" }); // Limpia el formulario
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-md">
      <h2 className="text-lg font-bold mb-2">Agregar Hotel</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre del Hotel"
        value={hotel.name}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="location"
        placeholder="Ubicación"
        value={hotel.location}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        name="price"
        placeholder="Precio por noche"
        value={hotel.price}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Agregar Hotel
      </button>
    </form>
  );
};

export default HotelForm;
