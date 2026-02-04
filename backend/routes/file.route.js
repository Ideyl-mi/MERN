import { Router } from "express";
import { handleSingleFile } from "../controller/file.controller.js";
import { upload } from "../utils/multer.js";

export const fileRouter = Router();

fileRouter.post("/single", upload.single("document"), handleSingleFile);
