let mongoose = require("mongoose");

// create a customer model class
let customer = mongoose.Schema(
  {
    fname: String,
    lname: String,
    gender: String,
    dob: String,
    contact_address: { type: String, default: "Not Provided" },
    cust_email: String,
    cust_pass: String,
  },
  {
    collection: "customer",
  }
);

export default mongoose.model("customer", customer);
