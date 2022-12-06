"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require("mongoose");
const nums = mongoose.Schema({
    room_id: Number,
    hotel_id: Number,
    customer_id: Number,
}, {
    collection: "nums",
});
exports.default = mongoose.model("nums", nums);
//# sourceMappingURL=nums.js.map