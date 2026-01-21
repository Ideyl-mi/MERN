import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name must be sent"],
    unique: false,
  },
  price: {
    type: Number,
    required: [true, "Price must be sent"],
    unique: false,
  },
  description: {
    type: String,
    required: [true, "Description must be sent"],
    unique: false,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity must be specified"],
    unique: false,
  },
});

export const Product = mongoose.model("Product", productSchema);
