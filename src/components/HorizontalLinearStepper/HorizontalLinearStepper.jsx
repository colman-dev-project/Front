import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStep from "./useStep";
import {containerStyle,stepContentBox,buttonContainer,
         spacer,backButton,completeText} from "./HorizontalLinearStepper.styles";

import OrderSummary from "./steps/OrderSummary";
import CustomerDetails from "./steps/CustomerDetails";
import PaymentDetails from "./steps/PaymentDetails";
import OrderComplete from "./steps/OrderComplete";

const stepComponents = [
    <OrderSummary />,
    <CustomerDetails />,
    <PaymentDetails />,
    <OrderComplete />
  ];
  
const renderStepContent = (step) => stepComponents[step] || null;

const steps = [
  "Order Summary",
  "Customer Details",
  "Payment Details",
  "Order Complete"
];

export default function HorizontalLinearStepper() {
  const { activeStep, next, back, reset } = useStep(steps.length);

  return (
    <Box sx={containerStyle}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={stepContentBox}>{renderStepContent(activeStep)}</Box>

      {activeStep === steps.length ? (
        <>
          <Typography sx={completeText}>
            All steps completed – you're finished
          </Typography>
          <Box sx={buttonContainer}>
            <Box sx={spacer} />
            <Button onClick={reset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={buttonContainer}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={back}
              sx={backButton}
            >
              Back
            </Button>
            <Box sx={spacer} />
            <Button onClick={next}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
