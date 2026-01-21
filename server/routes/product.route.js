import { Router } from "express";
import { createProductController, fetchOneProductController, getAllProductController } from "../controller/product.controller.js";

export const productRouter = Router();

productRouter.post("/create", createProductController)
productRouter.get("/get", getAllProductController)
productRouter.get("/find", fetchOneProductController)
