import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DynemicInputForm = () => {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState([
    {
      name: "",
      email: "",
    },
  ]);
  const [inputValue, setInputvalue] = useState({
    phone: "",
    address: "",
  });
  console.log("inputField>>>", inputField);

  const handleChange = (e, index) => {
    const data = [...inputField];
    data[index][e.target.name] = e.target.value;
    setInputField(data);
  };

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputvalue({
      ...inputValue,
      [name]: value,
    });
  };
  // Add field /////
  const addFields = () => {
    let newField = {
      name: "",
      email: "",
    };
    setInputField([...inputField, newField]);
  };

  /// Remove field one by one
  const handleRemove = (index) => {
    const data = [...inputField];
    data.splice(index, 1);
    setInputField(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputField[0].phone = inputValue.phone;
    inputField[0].address = inputValue.address;
    console.log("first", [...inputField]);
    const localdata = JSON.parse(localStorage.getItem("dynemicform")) || [];
    localStorage.setItem(
      "dynemicform",
      JSON.stringify([
        ...localdata,
        {
          id: localdata.length + 1,
          ...inputField,
        },
      ])
    );
    navigate("/");
  };

  return (
    <>
      <h1>DynemicInputForm</h1>

      <form>
        {inputField.map((input, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                value={input.name}
                onChange={(e) => handleChange(e, index)}
              />

              <input
                type="text"
                placeholder="email"
                name="email"
                value={input.email}
                onChange={(e) => handleChange(e, index)}
              />
              {index ? (
                <button onClick={() => handleRemove(index)}>
                  {inputField.length > 1 ? "Remove" : ""}
                </button>
              ) : null}
            </div>
          );
        })}
        <input
          type="number"
          placeholder="Phone number"
          name="phone"
          value={inputValue.phone}
          onChange={onChangeHandler}
        />
        <input
          type="address"
          placeholder="Address"
          name="address"
          value={inputValue.address}
          onChange={onChangeHandler}
        />
      </form>
      <button onClick={addFields} className="mx-6">
        Add More
      </button>

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
export default DynemicInputForm;
