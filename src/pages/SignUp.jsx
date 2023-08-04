import React, { useEffect, useState } from "react";
import Credentials from "../Components/Credentials";
import PersonalInfo from "../Components/PersonalInfo";
import WorkInfo from "../Components/WorkInfo";

function SignUp({isAdmin}) {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Personal Information", "Work Information", "Credentials"];

  function next(){
    
    setCurrentStep(prev=> prev+1)
  }
  

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo onNext={next} isAdmin={isAdmin}/>;
      case 2:
        return <WorkInfo onNext={next} isAdmin={isAdmin} />;
      case 3:
        return <Credentials isAdmin={isAdmin} />;
      default:
        return <PersonalInfo onNext={next} isAdmin={isAdmin} />;
    }
  };
  return (
    <>
     <div
      className="w-full mt-14 flex place-items-center justify-center"
     
    >
      <div className="w-full max-w-md  p-8 rounded-lg shadow-inner border">
        <h1 className="text-3xl font-semibold text-center mb-6"> {steps[currentStep-1]}</h1>
      {displayStep(currentStep)}
      </div>
      </div>
      <div className="relative">
        <div className="flex items-center justify-center h-16  ">
          <span className="w-3 h-3 bg-yellow-400 rounded-full  mr-4"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full  mr-4"></span>

          <span className="w-3 h-3 bg-yellow-400 rounded-full  mr-4"></span>
        </div>
      </div>
    </>
  );
}

export default SignUp;
