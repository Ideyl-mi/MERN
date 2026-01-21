import nodemailer from "nodemailer";
import { SMPT_EMAIL, SMPT_PASS } from "../config/env.js";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: SMPT_EMAIL,
    pass: SMPT_PASS,
  },
});

export const sendMail = async ({ email, subject, html }) => {
  const result = await transporter.sendMail({
    from: "Yedi <animeyedi@gmail.com>",
    to: email,
    subject: subject,
    html: html,
  });
};
