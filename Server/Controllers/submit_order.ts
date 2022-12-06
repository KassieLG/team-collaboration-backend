/*  Team 3
 */

import express, { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

import room from "../Models/room";

export async function Submit(req: Request, res: Response, next: NextFunction) {
  const roomCollection = await room.find({});
  return res.status(200).send(roomCollection);
}
