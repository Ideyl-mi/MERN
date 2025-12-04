import { Router } from "express";
import { createUserController, deleteUserController, getAllUserController, getSpecificUserController, loginUserController, updateUserController } from "../controller/user.controller.js";


export const userRouter = Router();


userRouter.post("/create", createUserController)
userRouter.get("/get", getAllUserController)
userRouter.post("/login", loginUserController)
userRouter.get("/get/:id", getSpecificUserController)
userRouter.patch("/update/:id", updateUserController)
userRouter.delete("/delete/:id", deleteUserController)