import React, { useState } from "react";
import "./LoginForm.css";
import SCHOOLIMG from "../assets/Students walking in front of university flat vector illustration.jpg";

const LoginForm = () => {
  const [userType, setUserType] = useState("admin");
  const [userId, setUserId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  //   const [info,setInfo] = useState([]);

  const userTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "admin") {
      // Handle admin login
      console.log("Admin Login:", userId, adminPassword);
    } else {
      // Handle parent login
      console.log("Parent Login:", userName, password, mobileNumber);
    }
  };

  return (
    <div className="pages">
      <div className="left_sec">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="title selector">Login</div>
        <div className="selector">
          <select value={userType} onChange={userTypeChange}>
            <option value="admin">Admin</option>
            <option value="parent">Parent</option>
          </select>
        </div>

        {userType === "admin" ? (
          <div className="admin_sec">
            <div class="input-box underline">
              <input
                type="text"
                value={userId}
                placeholder="Enter Your Email"
                onChange={(e) => setUserId(e.target.value)}
                required
              />
              <div class="underline"></div>
            </div>
            <div class="input-box">
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter Your Password"
                required
              />
              <div class="underline"></div>
            </div>
          </div>
        ) : (
          <>
            <div class="input-box underline">
              <input
                type="text"
                placeholder="Enter Your Email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <div class="underline"></div>
            </div>
            <div class="input-box">
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div class="underline"></div>
            </div>
            <div class="input-box">
              <input
                type="text"
                placeholder="Enter Your Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
              <div class="underline"></div>
            </div>
          </>
        )}
        <div class="input-box button">
          <input type="submit" name="" value="Continue" />
        </div>
      </form>
    </div>
    </div>
    <div className="right_sec">
        <div className="side_img">
          <img src={SCHOOLIMG}  alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
