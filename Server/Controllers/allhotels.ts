/*  Team 3
 */

import express, { Request, Response, NextFunction } from "express";

import hotel from "../Models/hotel";

export async function allHotels(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hotelCollection = await hotel.find({});
  return res.status(200).send(hotelCollection);
}
