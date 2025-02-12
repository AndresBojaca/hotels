import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Hotel Management</h1>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/admin">Administración</Link>
        <Link to="/booking">Reservas</Link>
      </div>
    </nav>
  );
};

export default Navbar;
