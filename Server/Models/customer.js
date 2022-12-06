"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require("mongoose");
let customer = mongoose.Schema({
    customer_id: Number,
    fname: String,
    lname: String,
    gender: String,
    age: Number,
    contact_address: String,
    cust_email: String,
    cust_pass: String,
}, {
    collection: "customer",
});
exports.default = mongoose.model("customer", customer);
//# sourceMappingURL=customer.js.map