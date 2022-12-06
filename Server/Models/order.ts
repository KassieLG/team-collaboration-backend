let mongoose = require("mongoose");

// create a order model class
let order = mongoose.Schema(
  {
    order_id: Number,
    order_description: String,
    trans_id: Number,
    customer_id: Number,
    order_date: Date,
    status: String,
    trans_id_hotel: Number,
  },
  {
    collection: "order",
  }
);

export default mongoose.model("order", order);
