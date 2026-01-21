import { Router } from "express";
import {
  createOrderController,
  deleteOrderController,
  fetchOneOrderController,
  getAllOrderController,
  getSpecificOrderController,
  updateOrderController,
} from "../controller/order.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const orderRouter = Router();

orderRouter.post("/create", isAuthenticated, createOrderController);
orderRouter.get("/get", getAllOrderController);
orderRouter.get("/find", fetchOneOrderController);
orderRouter.patch("/update/:id", updateOrderController);
orderRouter.delete("/delete/:id", deleteOrderController);
orderRouter.get("/get/:id", getSpecificOrderController);
