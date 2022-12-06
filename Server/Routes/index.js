"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const allhotels_1 = require("../Controllers/allhotels");
const router = express_1.default.Router();
const index_1 = require("../Controllers/index");
const submit_order_1 = require("../Controllers/submit_order");
router.get("/", index_1.DisplayHomePage);
router.get("/confirm", submit_order_1.Submit);
router.post("/search-hotels", index_1.SearchHotels);
router.get("/hotels", allhotels_1.allHotels);
router.post("/search-rooms", index_1.SearchRooms);
exports.default = router;
//# sourceMappingURL=index.js.map