import React, { useState } from "react";
import "./formmultistep.css";
import { TiTick } from "react-icons/ti";
const FormMultiStep = () => {
  const steps = ["Personal information", "Contact info", "Location info"];
  const [currentStep, setCurrentStep] = useState(1);
  console.log("currentStep>>>", currentStep);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="flex justify-between w-2/6 mx-auto mt-5">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500 mt-3">{step}</p>
          </div>
        ))}
      </div>

      <div className="text-center my-7">
        <button>Back</button>

        {!complete && (
          <button
            className="btn "
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </>
  );
};

export default FormMultiStep;
