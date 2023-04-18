import React from "react";

const ContactInfo = (props) => {
  //   console.log("props>>>>", props);
  const { email, phone } = props.signupForm;
  return (
    <div>
      <h1>Contact Info</h1>
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email
          </label>
          <div>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={props.handleChange}
              className="relative block w-full appearance-none rounded-none 
              rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
              placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
              focus:ring-indigo-500 sm:text-sm"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Phone
          </label>
          <div>
            <input
              id="phone"
              name="phone"
              type="number"
              value={phone}
              onChange={props.handleChange}
              className="relative block w-full appearance-none rounded-none 
              rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
              placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
              focus:ring-indigo-500 sm:text-sm"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
