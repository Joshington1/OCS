// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../../../images/logo.png";
import "../../Login/Login.css";
import "../../Student/Login/StudentLogin.css";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    navigate("/admin/dashboard")
  };

  return (
    <div className="login">
      <div className="login-body">
        <div className="back">
          <Link to="/" className="back-link">
            {`<`} Back
          </Link>
        </div>
        <img src={Logo} alt="" className="login-logo" />
        <p className="login-head">Admin Login</p>
        <form className="stud-login" onSubmit={handleSubmit}>
          <div className="form-flex">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsername}
              required
              placeholder="Username"
            />
          </div>
          <div className="form-flex">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
          </div>
          <button className="log-btn" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
