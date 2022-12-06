"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require("mongoose");
let order = mongoose.Schema({
    order_id: Number,
    order_description: String,
    trans_id: Number,
    customer_id: Number,
    order_date: Date,
    status: String,
    trans_id_hotel: Number,
}, {
    collection: "order",
});
exports.default = mongoose.model("order", order);
//# sourceMappingURL=order.js.map