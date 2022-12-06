"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require("mongoose");
const hotel = mongoose.Schema({
    hotel_id: Number,
    hotel_name: Number,
    description: String,
    hotel_address: String,
    hotel_state: String,
    price: Number,
    reviews: String,
    Amenities: String,
}, {
    collection: "hotel",
});
exports.default = mongoose.model("hotel", hotel);
//# sourceMappingURL=hotel.js.map