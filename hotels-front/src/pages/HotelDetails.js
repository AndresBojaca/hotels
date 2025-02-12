import { useParams } from "react-router-dom";
import { HotelDetailsProvider } from "../context/HotelDetailsContext";
import HotelDetailsContent from "../components/HotelDetailsContent";

const HotelDetails = () => {
  const { id } = useParams(); // Obtener el ID del hotel desde la URL

  return (
    <HotelDetailsProvider hotelId={id}>
      <HotelDetailsContent /> {/* Componente que consume el contexto */}
    </HotelDetailsProvider>
  );
};

export default HotelDetails;
