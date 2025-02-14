import { useContext } from "react";
import { HotelContext } from "../context/HotelContext";
import { DataTable } from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Hotel } from "../libs/types";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const HotelList = () => {
  const { hotels, deleteHotel } = useContext(HotelContext);

  const columns: ColumnDef<Hotel>[] = [
    {
      accessorKey: "name",
      header: "Nombre",
      cell: ({ row }) =>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden">
            <img src="" alt="" className="w-40 h-40 object-cover" />
          </div>
          <span className="font-bold">{row.getValue("name")}</span>
        </div>
      ,
    },
    {
      accessorKey: "location",
      header: "Dirección",
    },
    {
      accessorKey: "price",
      header: "Precio",
      cell: ({ row }) => {
        const price = row.getValue("price");
        return `$${price}`;
      },
    },
    {
      accessorKey: "isActive",
      header: "En servicio",
      cell: ({ row }) =>
        row.getValue("isActive") ? (
          <span className="text-green-600">En servicio</span>
        ) : (
          <span className="text-gray-600">Inhabilitado</span>
        ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-2 justify-center">
          <Link
            to={`/hotel/${row.getValue("_id")}`}
          >
            <Button
              onClick={() => deleteHotel(row.getValue("_id"))}
            >
              Detalles
            </Button>
          </Link>
          <Button
            onClick={() => deleteHotel(row.getValue("id"))}
            className="bg-red-500 hover:bg-red-700 text-white"
          >
            Eliminar
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      {hotels.length === 0 ? (
        <p>No hay hoteles registrados.</p>
      ) : (
        <DataTable data={hotels} columns={columns} />
      )}
    </div>
  );
};

export default HotelList;
