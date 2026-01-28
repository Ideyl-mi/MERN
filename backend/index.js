import express from "express";
import { connectDB } from "./config/connectMongoose.js";
import { userRouter } from "./routes/user.route.js";
import { productRouter } from "./routes/product.route.js";
import { orderRouter } from "./routes/order.route.js";
import cors from "cors";

const app = express();
app.use(express.json());

const PORT = 7888;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.use(cors("http://localhost:5173"));
