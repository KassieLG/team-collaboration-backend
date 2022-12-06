let mongoose = require("mongoose");

// create a customer model class
let customer = mongoose.Schema(
  {
    customer_id: Number,
    fname: String,
    lname: String,
    gender: String,
    age: Number,
    contact_address: String,
    cust_email: String,
    cust_pass: String,
  },
  {
    collection: "customer",
  }
);

export default mongoose.model("customer", customer);
