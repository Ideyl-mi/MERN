import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        required:[true, "Brand name must be given"],
        unique:false
    },
    laptop: {
        type: String,
        required: [true, "Laptop name must be sent"],
        unique: [true, "Laptop version already input"]
    },
    price: {
        type: Number,
        required: [true, "Price name must be sent"],
        unique: false
    },
    description: {
        type: String,
        required: [true, "Description must be sent"],
        unique: false
    },
    warranty: {
        type: String,
        required: [true, "Warranty must be sent"],
        unique: false
    },
    specs: {
        type: String,
        required: [true, "Specs must be sent"],
        unique: false
    },
    batterylife: {
        type: String,
        required: [true, "Battery Life must be sent"],
        unique: false
    },
});

export const Product = mongoose.model("Product", productSchema)
