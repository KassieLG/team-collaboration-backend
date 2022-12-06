/*  Team 3
 */

import express from "express";
import { allHotels } from "../Controllers/allhotels";
const router = express.Router();

// instantiate an object of type index controller
import {
  DisplayHomePage,
  SearchHotels,
  SearchRooms,
} from "../Controllers/index";
import { Submit } from "../Controllers/submit_order";

/* GET home page. */
router.get("/", DisplayHomePage);
router.get("/confirm", Submit);
router.post("/search-hotels", SearchHotels);
router.get("/hotels", allHotels);
router.post("/search-rooms", SearchRooms);

export default router;
