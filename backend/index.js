import express from "express";
import { connectDB } from "./config/connectMongoose.js";
import { userRouter } from "./routes/user.route.js";
import { productRouter } from "./routes/product.route.js";
import { orderRouter } from "./routes/order.route.js";
import cors from "cors";
import { fileRouter } from "./routes/file.route.js";

const app = express();
app.use(express.json());
app.use(cors("http://localhost:5173"));
app.use(express.static("./upload"));

const PORT = 7888;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/file", fileRouter);
