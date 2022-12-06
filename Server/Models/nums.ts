let mongoose = require("mongoose");

// create a room model class
const nums = mongoose.Schema(
  {
    room_id: Number,
    hotel_id: Number,
    customer_id: Number,
  },
  {
    collection: "nums",
  }
);

export default mongoose.model("nums", nums);
