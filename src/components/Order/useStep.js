import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStep = (totalSteps, finalRoute = "/#TODO") => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (activeStep === totalSteps - 1) 
    {
      navigate(finalRoute);
    } 
    else 
    {
      setActiveStep(prev => prev + 1);
    }
  };

  const back = () => setActiveStep(prev => prev - 1);

  return { activeStep, next, back };
};


export default useStep;
