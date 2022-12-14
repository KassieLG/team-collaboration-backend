"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require("mongoose");
const room = mongoose.Schema({
    room_id: Number,
    hotel_id: Number,
    room_type: String,
    room_floor: Number,
    room_number: Number,
    price: Number,
    extras: Number,
}, {
    collection: "room",
});
exports.default = mongoose.model("room", room);
//# sourceMappingURL=room.js.map