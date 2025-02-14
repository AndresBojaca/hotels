import HotelList from "@/components/HotelList";
import Header from "@/components/Header";

const Hotels = () => {

  const breadcrumbs = [
    { href: "/", label: "Inicio" },
    { href: "/admin", label: "Administración" },
    { label: "Gestión des hoteles", isPage: true },
];

  return (
    <div className="p-4">
        <Header
            title="Gestión des hoteles"
            subtitle="Administra los hoteles de la plataforma"
            breadcrumbs={breadcrumbs}
        />
      <HotelList />
    </div>
  );
};

export default Hotels;
