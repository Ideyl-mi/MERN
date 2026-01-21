import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  fetchOneProductController,
  getAllProductController,
  getSpecificProductController,
  updateProductController,
} from "../controller/product.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const productRouter = Router();

productRouter.post("/create", isAuthenticated, createProductController);
productRouter.get("/get", getAllProductController);
productRouter.get("/find", fetchOneProductController);
productRouter.patch("/update/:id", updateProductController);
productRouter.delete("/delete/:id", deleteProductController);
productRouter.get("/get/:id", getSpecificProductController);
