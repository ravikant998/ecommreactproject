import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  // console.log("props" > props);
  const { Component } = props;

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("userlogin");
    if (!login) {
      navigate("/login");
    }
  });
  return <Component />;
};

export default ProtectedRoutes;
