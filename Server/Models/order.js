"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require("mongoose");
let order = mongoose.Schema({
    customer_id: String,
    hotel_id: String,
    flight_id: String,
}, {
    collection: "order",
});
exports.default = mongoose.model("order", order);
//# sourceMappingURL=order.js.map