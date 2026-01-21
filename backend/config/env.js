import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URL = process.env.MONGODB_URL;
export const SECRET_KEY = process.env.SECRET_KEY;
export const SMPT_EMAIL = process.env.SMPT_EMAIL;
export const SMPT_PASS = process.env.SMPT_PASS;
