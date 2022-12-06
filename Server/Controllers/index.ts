/*  Team 3
 */

import express, { Request, Response, NextFunction } from "express";
import flight from "../Models/flight";
import hotel from "../Models/hotel";
import room from "../Models/room";

// Get Home page

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.json({ Message: "Welcome to the Quick National Travel" });
}

export async function SearchHotels(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let filterString = req.body.city;
  const hotelCollection = await hotel.find({
    hotel_address: { $regex: new RegExp(filterString), $options: "i" },
  });
  res.send(hotelCollection);
}

export async function SearchRooms(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let filterString = Number(req.body.id);
  const roomCollection = await room.find({
    hotel_id: filterString,
  });

  res.send(roomCollection);
}

export async function SearchFlight(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let filterString = req.body.date;
  const flightCollection = await flight.find({
    departure_date: { $regex: new RegExp(filterString) },
  });
  res.send(flightCollection);
}
