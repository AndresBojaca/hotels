export type Hotel = {
    _id: number;
    name: string;
    location: string;
    price: number;
    rooms: any[];
    isActive: boolean;
}

export type HotelMongo = {
    _id: number;
    name: string;
    location: string;
    price: number;
    rooms: any[];
    isActive: boolean;
}