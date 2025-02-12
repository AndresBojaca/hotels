import HotelForm from "../components/HotelForm";
import HotelList from "../components/HotelList";

const Admin = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HotelForm />
        <HotelList />
      </div>
    </div>
  );
};

export default Admin;
