import { useState } from "react";

const RoomForm = ({ onRoomAdded }) => {
  const [room, setRoom] = useState({
    type: "",
    cost: "",
    taxes: "",
    location: "",
  });

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (room.type && room.cost && room.location) {
      onRoomAdded(room); // Llama a la función del contexto para agregar la habitación
      setRoom({ type: "", cost: "", taxes: "", location: "" }); // Limpia el formulario
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-md">
      <h2 className="text-lg font-bold mb-2">Agregar Habitación</h2>
      <input
        type="text"
        name="type"
        placeholder="Tipo (Single, Double, Suite)"
        value={room.type}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        name="cost"
        placeholder="Costo Base"
        value={room.cost}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        name="taxes"
        placeholder="Impuestos"
        value={room.taxes}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="location"
        placeholder="Ubicación (Ej: Piso 2)"
        value={room.location}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Agregar Habitación
      </button>
    </form>
  );
};

export default RoomForm;
