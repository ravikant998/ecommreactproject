import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(6, "Name must be at least 6 characters")
    .max(20, "Name must not exceed 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please use correct email"
    ),
  password: yup
    .string()
    .min(8, "Password must be at least 6 characters")
    .max(32, "Password must not exceed 20 characters")
    .required("Please enter the password"),

  phone: yup.string().required("Phone number required").min(8).max(10),
});

const ProfieUpdate = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let userdetails = JSON.parse(localStorage.getItem("usersignup"));

  useEffect(() => {
    userdetails.forEach((element) => {});
  });

  const onSubmitHandler = () => {
    alert("ravi");
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            User profile update
          </h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600">
            <Link
              href="signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Update profile
            </Link>
          </p> */}
        </div>

        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="mt-8 space-y-6"
        >
          <input type="text" name="remember" />
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <div>
                <input
                  //   id="name"
                  name="name"
                  type="text"
                  {...register("name")}
                  className="relative block w-full appearance-none rounded-none 
            rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
            placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
            focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your name"
                />
                {/* <span className="text-red-500">
                  <p>{errors.name?.message}</p>
                </span> */}
              </div>
            </div>

            {/* <div>
          <label htmlFor="file" className="sr-only">
            Uplaod file
          </label>

          <input
            id="image"
            name="image"
            {...register("file", { required: true })}
            type="file"
            className="relative block w-full appearance-none rounded-none 
            rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
            placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
            focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Your phone number"
          />
          <span className="text-red-500">
            <p>{errors.file?.message}</p>
          </span>
        </div> */}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>

              <input
                id="email-address"
                name="email"
                {...register("email")}
                type="email"
                className="relative block w-full appearance-none rounded-none 
        rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
      placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
      focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
              {/* <span className="text-red-500">
                <p>{errors.email?.message}</p>
              </span> */}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div></div>
              <input
                id="password"
                name="password"
                {...register("password")}
                type="password"
                className="relative block w-full appearance-none rounded-none rounded-b-md 
          border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 
          focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              {/* <span className="text-red-500">
                <p>{errors.password?.message}</p>
              </span> */}
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                {...register("phone")}
                type="number"
                className="relative block w-full appearance-none rounded-none 
            rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
            placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
            focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Your phone number"
              />
              {/* <span className="text-red-500">
                <p>{errors.phone?.message}</p>
              </span> */}
            </div>
            <div>
              <label htmlFor="dob" className="sr-only">
                DOB
              </label>
              <input
                id="dob"
                name="dob"
                {...register("dob")}
                type="date"
                className="relative block w-full appearance-none rounded-none 
            rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
            placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
            focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Your phone number"
              />
              {/* <span className="text-red-500">
                <p>{errors.dob?.message}</p>
              </span> */}
            </div>
            {/* <div>
              <label className="sr-only">Please select country </label>
              <select
                name="countryname"
                id="countryname"
                {...register("countryname")}
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option>Choose Country</option>
                {data.countries.map((value, key) => {
                  return (
                    <option value={value.name} key={key}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div> */}
            {/* <div>
              <label className="sr-only">Please select state </label>
              <select
                name="statename"
                id="statename"
                {...register("statename")}
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option>Choose State</option>
                {availableState?.states.map((value, key) => {
                 
                  return (
                    <option value={value.name} key={key}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div> */}
            {/* <div>
              <label className="sr-only">Please select city </label>
              <select
                name="cityname"
                id="cityname"
                {...register("cityname")}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option>Choose City</option>
                {availableCities?.cities.map((value, key) => {
                  return (
                    <option value={value.name} key={key}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div> */}
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfieUpdate;
