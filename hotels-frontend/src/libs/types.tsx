export type Room = {
    _id: number;
    baseCost: number;
    taxes: number;
    type: string;
    roomLocation: string;
    isRoomActive: boolean;
  };

export type Hotel = {
    _id: number;
    name: string;
    location: string;
    price: number;
    isActive: boolean;
    rooms: Room[];
    images?: string[];
    rating?: number;
    amenities?: string[];
}

export type HotelMongo = {
    _id: number;
    name: string;
    location: string;
    price: number;
    isActive: boolean;
    rooms: Room[];
    images?: string[];
    rating?: number;
    amenities?: string[];
}