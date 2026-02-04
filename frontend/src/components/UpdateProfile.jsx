import axios from "axios";
import React, { useState } from "react";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState("");

  const handleUpdateProfile = async (e) => {
    e.prevenDefault();

    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const response = await axios.patch(
        "http://localhost:7888/user/update",
        {
          email: email,
          username: username,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setError(response.data.message);

      console.log(response);
      alert("Profile Updated Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>UpdateProfile</h1>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />
        <input
          type="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter your username"
        />
        <button type="submit">Update Profile</button>
      </form>
      <h5>
        Your new username is {username} and your updated email is {email}
      </h5>
    </div>
  );
};

export default UpdateProfile;
