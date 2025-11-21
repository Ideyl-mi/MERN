import { Router } from "express";
import { createUserController } from "../controller/user.controller.js";

export const userRouter = Router();

userRouter.post('/create', createUserController)
