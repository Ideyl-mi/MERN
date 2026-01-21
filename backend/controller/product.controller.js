import { Product } from "../schema/product.schema.js";

export const createProductController = async (req, res) => {
  try {
    let data = req.body;
    const id = req.userID;
    console.log(id);
    const result = await Product.create(data);
    res.status(201).json({
      message: "Product registered successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const getAllProductController = async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json({
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const fetchOneProductController = async (req, res) => {
  try {
    let { brand, laptop } = req.body;
    const output = await Product.findOne({ brand: brand, laptop: laptop });
    if (!output) {
      res.status(404).json({
        message: "Invalid Input",
      });
    }
    res.status(200).json({
      message: "Product found",
      result: output,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const updateProductController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    const result = await Product.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      message: "Product found successfuly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const deleteProductController = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const getSpecificProductController = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const result = await Product.findById(id);
    res.status(200).json({
      message: "Product found",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
