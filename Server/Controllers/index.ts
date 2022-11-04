/*  Team 3
 */

import express, { Request, Response, NextFunction } from "express";

// Get Home page

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.json({ Message: "Welcome to the Quick National Travel" });
}
