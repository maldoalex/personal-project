import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./Register-and-Login.scss";

const RegisterAndLogin = () => (
  <div className="reg-login">
    <Login />
    <Register />
  </div>
);

export default RegisterAndLogin;
