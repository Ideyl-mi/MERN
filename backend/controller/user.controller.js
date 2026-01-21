import { User } from "../schema/user.schema.js";
import { hashedPassword, verifyPassword } from "../utils/bcrypt.js";
import { generateToken, verifyToken } from "../utils/jwt.js";
import { sendMail } from "../utils/nodemailer.js";

export const registerUserController = async (req, res) => {
  try {
    let data = req.body;

    data = {
      ...data,
      password: await hashedPassword(data.password),
    };

    const result = await User.create(data);

    const token = await generateToken({
      payload: {
        email: result.email,
        id: result._id,
      },
      expiryTime: "1h",
    });

    sendMail({
      email: result.email,
      subject: "Verify Your Email Address",
      html: `
      <h6>Hello ${result.username},</h6>  
      </br>
      <p>Thanks for registering an account with us! Please verify your account with us</p>
      <a href=http://localhost:7888/user/verify?token=${token}>
      <button style="border: none; background-color: blue; color: white; padding-top: 5px; padding-bottom: 5px; padding-right: 10px; padding-left:10px;">Verify</button>
      </a>
      `,
    }); // argument passes ram@gmail.com

    res.status(201).json({
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const verifyUser = async (req, res) => {
  try {
    let token = req.query.token;

    const verifiedToken = await verifyToken(token);

    const id = verifiedToken.id;

    const result = await User.findByIdAndUpdate(
      id,
      {
        isVerified: true,
      },
      { new: true }
    );

    res.status(200).json({
      message: "User verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const getAllUserController = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json({
      sms: "User fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
export const getSpecificUserController = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const result = await User.findById(id);
    res.status(200).json({
      message: "User fetched",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
export const updateUserController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    const result = await User.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      message: "User fetched successfuly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
export const deleteUserController = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    res.status(200).json({
      message: "User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
export const loginUserController = async (req, res) => {
  try {
    const isValidEmail = await User.findOne({ email: req.body.email });
    if (!isValidEmail) {
      res.status(400).json({
        message: "Invalid Credential",
      });
    }
    if (!isValidEmail.isVerified) {
      res.status(404).json({
        message: "Please verify your account first",
      });
    }
    const isValidPassword = await verifyPassword({
      hashedPassword: isValidEmail.password,
      plainPassword: req.body.password,
    });
    if (!isValidPassword) {
      res.status(400).json({
        message: "Invalid Credential",
      });
    }

    const token = await generateToken({
      payload: {
        id: isValidEmail.id,
      },
      expiryTime: "60s",
    });

    res.status(200).json({
      message: "User logged In successfully",
      data: isValidEmail,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const forgotPassword = async (req, res) => {
  try {
    let email = req.body.email;
    const isValidEmail = await User.findOne({ email: email });

    if (!isValidEmail) {
      res.status(400).json({
        message: "Account with this email does not exist",
      });
    }
    const token = await generateToken({
      payload: {
        email: isValidEmail.email,
        id: isValidEmail._id,
      },
      expiryTime: "1h",
    });
    const result = await sendMail({
      email: req.body.email,
      subject: "Password reset link",
      html: ` 
      </br>
      <p>Reset password link</p>
      <a href=http://localhost:7888/user/forgot-password?token=${token}>
      <button style="border: none; background-color: blue; color: white; padding-top: 5px; padding-bottom: 5px; padding-right: 10px; padding-left:10px;">Verify</button>
      </a>
      `,
    });
    res.status(200).json({
      message: "Password reset link has been sent to the user",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// get token from query
// verify token if token is not valid send Not valid error
// req password from body
// hash password and update password of the user
// hint : req.query.token  , req.body.password , id = token.id , findByIdAndUpdate - hashPassword and update
export const resetPassword = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
