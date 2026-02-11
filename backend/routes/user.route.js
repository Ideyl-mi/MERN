import { Router } from "express";
import {
  deleteUserController,
  forgotPassword,
  getAllUserController,
  getSpecificUserController,
  loginUserController,
  registerUserController,
  resetPassword,
  updateUserController,
  verifyUser,
} from "../controller/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.get("/verify", verifyUser);
userRouter.get("/get", getAllUserController);
userRouter.post("/login", loginUserController);
userRouter.get("/get/:id", getSpecificUserController);
userRouter.patch("/update", isAuthenticated, updateUserController);
userRouter.delete("/delete/:id", isAuthenticated, deleteUserController);
userRouter.post("/forgot-password", forgotPassword);
userRouter.patch("/reset-password", resetPassword);
