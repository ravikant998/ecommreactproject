import React from "react";

const LocationInfo = (props) => {
  const { state, city } = props.signupForm;
  return (
    <div>
      <h1>Location Info</h1>
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">
            State
          </label>
          <div>
            <input
              id="state"
              name="state"
              type="text"
              value={state}
              onChange={props.handleChange}
              className="relative block w-full appearance-none rounded-none 
              rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
              placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
              focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            City
          </label>
          <div>
            <input
              id="city"
              name="city"
              type="text"
              value={city}
              onChange={props.handleChange}
              className="relative block w-full appearance-none rounded-none 
              rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
              placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
              focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
