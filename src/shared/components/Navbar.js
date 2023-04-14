import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaUserAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/images/logo.png";
import SearchProduct from "./SearchProduct";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  const [username, setUsername] = useState();

  useEffect(() => {
    let user = localStorage.getItem("userlogin");
    setStatus(user);
  });

  useEffect(() => {
    let userdata = JSON.parse(localStorage.getItem("usersignup"));
    userdata?.forEach((val) => {
      setUsername(val);
    });
  }, []);

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

      {/* <div className="mx-4">
        <ul>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
      </div> */}

      <div className=" cursor-pointer cart absolute right-0 top-4 mx-5 flex">
        {!status ? (
          <Link to={"/login"}>
            <MdAccountCircle className="text-xl md:text-2xl mx-7" />
          </Link>
        ) : (
          <div className="mx-6">
            {/* <span onClick={logouthandler} className="mx-3">
              <FaUserAlt className=" text-xl md:text-2xl mx-3" />
            </span> */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {/* Options */}
                  {username.name}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="profileupdate"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Profile Update
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Change password
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logouthandler}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
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
