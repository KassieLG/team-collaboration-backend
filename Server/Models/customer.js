"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require("mongoose");
let customer = mongoose.Schema({
    fname: String,
    lname: String,
    gender: String,
    dob: String,
    contact_address: { type: String, default: "Not Provided" },
    cust_email: String,
    cust_pass: String,
}, {
    collection: "customer",
});
exports.default = mongoose.model("customer", customer);
//# sourceMappingURL=customer.js.map