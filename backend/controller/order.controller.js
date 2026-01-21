import { Order } from "../schema/order.schema.js";
import { Product } from "../schema/product.schema.js";

export const createOrderController = async (req, res) => {
  try {
    let data = req.body;
    let orderQuantity = data.quantity;
    const id = data.productID;
    const product = await Product.findById(id);
    if (orderQuantity > product.quantity) {
      res.status(400).json({
        message: "Order quantity is more than product quantity",
      });
    } else {
      const order = await Order.create(data);
      const result = await Product.findByIdAndUpdate(
        id,
        { quantity: product.quantity - orderQuantity },
        { new: true }
      );
      res.status(201).json({
        message: "Order created successfully",
        data: order,
        result: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const getAllOrderController = async (req, res) => {
  try {
    const result = await Order.find({});
    res.status(200).json({
      message: "Order fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const fetchOneOrderController = async (req, res) => {
  try {
    let { userID, productId } = req.body;
    const output = await Order.findOne({
      userID: userID,
      productId: productId,
    });
    if (!output) {
      res.status(404).json({
        message: "Invalid Input",
      });
    }
    res.status(200).json({
      message: "Order found",
      result: output,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const updateOrderController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    const result = await Order.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      message: "Order found successfuly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const deleteOrderController = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await Order.findByIdAndDelete(id);
    res.status(200).json({
      message: "Order deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const getSpecificOrderController = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const result = await Order.findById(id);
    res.status(200).json({
      message: "Order found",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
