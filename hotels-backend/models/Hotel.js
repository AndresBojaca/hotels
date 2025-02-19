const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
  isActive: { type: Boolean, default: true },
  images: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
  amenities: [{ type: String }]
});

module.exports = mongoose.model("Hotel", HotelSchema);
