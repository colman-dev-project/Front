import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import useStep from "./useStep";
import {
  containerStyle, stepContentBoxStyle, buttonContainerStyle,
  spacerStyle, backButton
} from "./Stepper.styles";
import { UI_TEXT } from "../../constants/text";

import OrderSummary from "./steps/OrderSummary";
import CustomerDetails from "./steps/CustomerDetails";
import PaymentDetails from "./steps/PaymentDetails";
import OrderComplete from "./steps/OrderComplete";
import SharedButton from "../shared/button";

const stepComponents = [
  <OrderSummary />,
  <CustomerDetails />,
  <PaymentDetails />,
  <OrderComplete />
];

const steps = [
  "Order Summary",
  "Customer Details",
  "Payment Details",
  "Order Complete"
];

export default function HorizontalLinearStepper() {
  const { activeStep, handleNext, handleBack } = useStep(steps.length);
  const isFinalStep = activeStep === steps.length - 1;

  return (
    <Box sx={containerStyle}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={stepContentBoxStyle}>
        {stepComponents[activeStep]}
      </Box>

      {isFinalStep ? (
        <Box sx={buttonContainerStyle}>
          <Box sx={spacerStyle} />
          <SharedButton onClick={handleNext} label={UI_TEXT.GO_HOME} />
        </Box>
      ) : (
        <Box sx={buttonContainerStyle}>
          <SharedButton
            color="inherit"
            disabled={activeStep === 0 || isFinalStep}
            onClick={handleBack}
            sx={backButton}
            label={UI_TEXT.BACK}
          />
          <Box sx={spacerStyle} />
          <SharedButton
            onClick={handleNext}
            label={activeStep === steps.length - 2 ? UI_TEXT.FINISH : UI_TEXT.NEXT}
          />
        </Box>
      )}
    </Box>
  );
}
