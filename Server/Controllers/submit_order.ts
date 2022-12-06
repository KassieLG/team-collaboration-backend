/*  Team 3
 */

import express, { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import customer from "../Models/customer";
import order from "../Models/order";

export async function Submit(req: Request, res: Response, next: NextFunction) {
  let address: String = "";
  if (req.body.contact_address != null) {
    address = req.body.contact_address;
  }

  let newCustomer = new customer({
    fname: req.body.fname,
    lname: req.body.lname,
    gender: req.body.gender,
    dob: req.body.dob,
    contact_address: address,
    cust_email: req.body.cust_email,
    cust_pass: req.body.cust_pass,
  });
  let savedCustomer = await customer.create(newCustomer);
  let newOrder = new order({
    customer_id: savedCustomer._id,
    flight_id: req.body.flight_id,
    hotel_id: req.body.hotel_id,
  });
  let savedOrder = await order.create(newOrder);
  return res.status(200).send(savedOrder._id);
}
