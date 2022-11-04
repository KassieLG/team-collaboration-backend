/*  Team 3
 */

import express from "express";
const router = express.Router();

// instantiate an object of type index controller
import { DisplayHomePage } from "../Controllers/index";

/* GET home page. */
router.get("/", DisplayHomePage);

export default router;
