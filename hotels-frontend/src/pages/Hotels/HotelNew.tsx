import { useContext } from "react";
import { HotelContext } from "@/context/HotelContext";
import { Hotel } from "@/libs/types";
import Header from "@/components/Header";
import DynamicForm from "@/components/DynamicForm";
import * as Yup from "yup";

const HotelsNew = () => {
  const { addHotel } = useContext(HotelContext);

  const breadcrumbs = [
    { href: "/", label: "Inicio" },
    { href: "/admin", label: "Administración" },
    { href: "/admin/hotels", label: "Gestión de Hoteles" },
    { label: "Nuevo hotel", isPage: true },
  ];

  const hotelFields = [
    { name: "name", label: "Nombre del Hotel", type: "text", placeholder: "Ingrese el nombre", validation: Yup.string().required("El nombre es obligatorio") },
    { name: "location", label: "Ubicación", type: "text", placeholder: "Ingrese la ubicación", validation: Yup.string().required("La ubicación es obligatoria") },
    { name: "price", label: "Precio por Noche", type: "number", placeholder: "Ingrese el precio", validation: Yup.number().required("El precio es obligatorio").positive("Debe ser un número positivo") },
    { name: "isActive", label: "¿Activo?", type: "checkbox", defaultValue: true },
    { name: "images", label: "Imágenes del Hotel", type: "image" }, // Nuevo campo para imágenes
    { name: "rating", label: "Calificación", type: "number", placeholder: "Ingrese la calificación (0-5)", validation: Yup.number().min(0).max(5).required("La calificación es obligatoria") }, // Nuevo campo para rating
    { name: "amenities", label: "Servicios (amenities)", type: "text", placeholder: "Ingrese los servicios separados por comas" }, // Nuevo campo para servicios
  ];

  const handleHotelSubmit = async (data: Record<string, any>) => {
    try {
      // Procesar imágenes antes de enviar al contexto si es necesario
      if (data.images instanceof File) {
        const imageUrl = URL.createObjectURL(data.images); // Simula subir la imagen y obtener la URL
        data.images = [imageUrl];
      }

      // Convertir amenities de texto a array
      if (data.amenities) {
        data.amenities = data.amenities.split(",").map((amenity: string) => amenity.trim());
      }

      await addHotel(data as Hotel); // Llama a la función del contexto para agregar el hotel
      alert("Hotel agregado exitosamente");
    } catch (error) {
      console.error("Error al agregar el hotel:", error);
      alert("Hubo un error al agregar el hotel");
    }
  };

  return (
    <div className="p-4">
      <Header
        title="Crear un nuevo hotel"
        subtitle="Administra los hoteles de la plataforma"
        breadcrumbs={breadcrumbs}
      />
      <div className="mt-4 p-4">
        <div className="flex">
          <div className="w-1/2">
            <DynamicForm fields={hotelFields} onSubmit={handleHotelSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsNew;
