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
import { isAuthorized } from "../middleware/isAuthorized.js";

export const productRouter = Router();

productRouter.post(
  "/create",
  isAuthenticated,
  isAuthorized,
  createProductController,
);
productRouter.get("/get", getAllProductController);
productRouter.get("/find", fetchOneProductController);
productRouter.patch(
  "/update/:id",
  isAuthenticated,
  isAuthorized,
  updateProductController,
);
productRouter.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized,
  deleteProductController,
);
productRouter.get("/get/:id", getSpecificProductController);
