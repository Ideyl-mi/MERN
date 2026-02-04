import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:7888/user/login", {
        email: email,
        password: password,
      });

      console.log(response);

      const token = response.data.token;
      console.log(token);

      const isToken = localStorage.setItem("token", token);
      alert("Login successful...");
      navigate("/dashboard");
      if (!isToken) {
        Error("failed to login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="header">
      <form onSubmit={handleLogin} className="forgot">
        <input
          type="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <a href="/forgot-password">Forgot password</a>
      </form>
    </div>
  );
};

export default Login;
