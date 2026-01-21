import { Router } from "express";
import {
  deleteUserController,
  forgotPassword,
  getAllUserController,
  getSpecificUserController,
  loginUserController,
  registerUserController,
  updateUserController,
  verifyUser,
} from "../controller/user.controller.js";

export const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.get("/verify", verifyUser);
userRouter.get("/get", getAllUserController);
userRouter.post("/login", loginUserController);
userRouter.get("/get/:id", getSpecificUserController);
userRouter.patch("/update/:id", updateUserController);
userRouter.delete("/delete/:id", deleteUserController);
userRouter.get("/forgot-password", forgotPassword);
