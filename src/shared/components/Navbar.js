import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/images/logo.png";
import SearchProduct from "./SearchProduct";

const Navbar = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  // console.log("status", status);

  useEffect(() => {
    let user = localStorage.getItem("userlogin");

    setStatus(user);
  });

  const logouthandler = () => {
    localStorage.removeItem("userlogin");
    setStatus(false);
    navigate("/");
  };

  const handlerCarrier = () => {
    navigate("/carrier");
  };
  return (
    <div
      className="flex flex-col md:flex-row md:justify-start justify-center 
  items-center my-2 shadow-md sticky top-0 z-10 bg-white"
    >
      <div className="logo mx-5">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav">
        <ul className="absolute top-5 text-black  text-center w-full font-bold"></ul>
      </div>
      <div className="mx-4">
        <SearchProduct />
      </div>

      <div className="mx-4">
        <Link to="/addproduct">Add Product</Link>
      </div>
      <div className="mx-4">
        <Link to="/about">About</Link>
      </div>
      <div className="mx-4">
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <button onClick={handlerCarrier}>Carrier</button>
      </div>
      <div className=" cursor-pointer cart absolute right-0 top-4 mx-5 flex">
        {!status ? (
          <Link to={"/login"}>
            <MdAccountCircle className="text-xl md:text-2xl mx-3" />
          </Link>
        ) : (
          <>
            <span onClick={logouthandler} className="mx-3">
              <AiOutlineLogout className=" text-xl md:text-2xl mx-3" />
            </span>
          </>
        )}
        <AiOutlineShoppingCart
          // onClick={toogleCart}
          className="text-xl md:text-2xl"
        />
      </div>
    </div>
  );
};

export default Navbar;
