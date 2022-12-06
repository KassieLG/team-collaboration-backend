let mongoose = require("mongoose");

// create a room model class
const room = mongoose.Schema(
  {
    room_id: Number,
    hotel_id: Number,
    room_type: String,
    room_floor: Number,
    room_number: Number,
    price: Number,
    extras: Number,
  },
  {
    collection: "room",
  }
);

export default mongoose.model("room", room);
