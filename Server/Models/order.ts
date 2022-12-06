let mongoose = require("mongoose");

// create a order model class
let order = mongoose.Schema(
  {
    customer_id: String,
    hotel_id: String,
    flight_id: String,
  },
  {
    collection: "order",
  }
);

export default mongoose.model("order", order);
