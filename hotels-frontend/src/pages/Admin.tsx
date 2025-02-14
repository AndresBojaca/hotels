import { Clock, DoorOpen, Hotel } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Admin = () => {

  const breadcrumbs = [
    { href: "/", label: "Inicio" },
    { label: "Administración", isPage: true },
  ];

  const AdminCard = ({ to, icon: Icon, label }: { to: string; icon: React.ElementType; label: string }) => (
    <Link to={to}>
      <div className="flex flex-col border-dashed gap-2 border-2 h-40 w-40 rounded-lg bg-transparent items-center justify-center hover:border-gray-400 transition-colors">
        <Icon size={64} className="text-gray-600" />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
    </Link>
  );

  return (
    <div className="p-4">
      <Header
        title="Administración"
        subtitle="Administra los hoteles de la plataforma"
        breadcrumbs={breadcrumbs}
      />
      <div className="p-4">
        <div className="flex items-center gap-6 space-y-2 pb-6">
          {/* Hoteles */}
          <AdminCard to="/admin/hotels" icon={Hotel} label="Hoteles" />
          {/* Cuartos */}
          <AdminCard to="/admin/rooms" icon={DoorOpen} label="Cuartos" />
          {/* Reservas */} 
          <AdminCard to="/admin/bookings" icon={Clock} label="Reservas" />
        </div>
      </div>
    </div>
  );
};

export default Admin;
