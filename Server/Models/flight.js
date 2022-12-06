"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { timeStamp } = require("console");
let mongoose = require("mongoose");
let flight = mongoose.Schema({
    flight_id: Number,
    airline_id: Number,
    airline_name: String,
    from_location: String,
    to_location: String,
    departure_date: String,
    arrival_date: String,
    duration: Number,
    total_seats: Number,
    available_seats: Number,
    price: Number,
}, {
    collection: "flight",
});
exports.default = mongoose.model("flight", flight);
//# sourceMappingURL=flight.js.map