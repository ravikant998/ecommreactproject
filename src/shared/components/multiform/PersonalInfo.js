import React from "react";

const PersonalInfo = (props) => {
  const { firstname, lastname, gender } = props.signupForm;
  return (
    <div>
      <h1>Personal Info</h1>
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">
            First Name
          </label>
          <div>
            <input
              id="firstname"
              name="firstname"
              type="text"
              required
              value={firstname}
              onChange={props.handleChange}
              className="relative block w-full appearance-none rounded-none 
                rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
                placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
                focus:ring-indigo-500 sm:text-sm"
              placeholder="First name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Last Name
          </label>
          <div>
            <input
              id="lastname"
              name="lastname"
              type="text"
              required
              value={lastname}
              onChange={props.handleChange}
              className="relative block w-full appearance-none rounded-none 
                rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
                placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
                focus:ring-indigo-500 sm:text-sm"
              placeholder="Last name"
            />
          </div>
        </div>
        <div>
          <label className="sr-only">Select gender</label>
          <select name="gender" value={gender} onChange={props.handleChange}>
            <option value="gender">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button onClick={props.addmore}>Add More</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
