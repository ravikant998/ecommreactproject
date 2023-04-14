import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtecteuserLogged = (props) => {
  // console.log("props>>>", props);
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let userlogin = localStorage.getItem("userlogin");
    // console.log("userlogin>>>", userlogin);
    if (userlogin) {
      navigate("/");
    }
  });

  return <Component />;
};

export default ProtecteuserLogged;
