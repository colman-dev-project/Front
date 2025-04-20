import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStep = (totalSteps, finalRoute = "/order-approval") => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const next = () => activeStep === totalSteps - 1 ? navigate(finalRoute) : setActiveStep(prev => prev + 1);
  const back = () => setActiveStep(prev => prev - 1);
  const reset = () => setActiveStep(0);

  return { activeStep, next, back, reset };
};

export default useStep;
