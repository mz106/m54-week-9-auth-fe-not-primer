import React from "react";

import Login from "../login/Login";
import Signup from "../signup/Signup";

import "./LogOrSign.css";

const LogOrSign = ({ setUser }) => {
  return (
    <div className="logorsign-wrapper">
      <Signup setUser={setUser} />
      <Login />
    </div>
  );
};

export default LogOrSign;
