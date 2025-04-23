import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routerPaths";


const useStep = (totalSteps, finalRoute = ROUTES.HOME) => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === totalSteps - 1) {
      navigate(finalRoute);
      return;
    }
  
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => setActiveStep(prev => prev - 1);

  return { activeStep, handleNext , handleBack };
};


export default useStep;
