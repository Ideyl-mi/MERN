import axios from "axios";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7888/user/forgot-password",
        {
          email: email,
        },
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />

        <button type="submit">Send password reset link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
