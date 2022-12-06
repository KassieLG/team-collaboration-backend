"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submit = void 0;
const customer_1 = __importDefault(require("../Models/customer"));
const order_1 = __importDefault(require("../Models/order"));
function Submit(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let address = "";
        if (req.body.contact_address != null) {
            address = req.body.contact_address;
        }
        let newCustomer = new customer_1.default({
            fname: req.body.fname,
            lname: req.body.lname,
            gender: req.body.gender,
            dob: req.body.dob,
            contact_address: address,
            cust_email: req.body.cust_email,
            cust_pass: req.body.cust_pass,
        });
        let savedCustomer = yield customer_1.default.create(newCustomer);
        let newOrder = new order_1.default({
            customer_id: savedCustomer._id,
            flight_id: req.body.flight_id,
            hotel_id: req.body.hotel_id,
        });
        let savedOrder = yield order_1.default.create(newOrder);
        return res.status(200).send(savedOrder._id);
    });
}
exports.Submit = Submit;
//# sourceMappingURL=submit_order.js.map