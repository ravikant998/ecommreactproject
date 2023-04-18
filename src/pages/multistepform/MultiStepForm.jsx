import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactInfo from "../../shared/components/multiform/ContactInfo";
import LocationInfo from "../../shared/components/multiform/LocationInfo";
import PersonalInfo from "../../shared/components/multiform/PersonalInfo";

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    phone: "",
    state: "",
    city: "",
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };
  const nextStep = () => {
    if (step === 3) {
      console.log("jfjdfj");
    } else {
      setStep((prevStep) => {
        return prevStep + 1;
      });
    }
  };
  const backStep = () => {
    setStep((prevStep) => {
      return prevStep - 1;
    });
  };

  return (
    <div>
      {
        {
          1: (
            <PersonalInfo signupForm={signupForm} handleChange={handleChange} />
          ),
          2: (
            <ContactInfo signupForm={signupForm} handleChange={handleChange} />
          ),
          3: (
            <LocationInfo signupForm={signupForm} handleChange={handleChange} />
          ),
        }[step]
      }

      {step > 1 && (
        <button className="mx-6" onClick={backStep}>
          Back
        </button>
      )}

      <button onClick={nextStep}>{step === 3 ? "Submit" : "Next"}</button>
    </div>
  );
};
export default MultiStepForm;
