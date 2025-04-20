import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import useStep from "./useStep";

import {StepperContainer, StepContentBox, ButtonContainer, Spacer,
     BackButton, CompleteText,} from "./HorizontalLinearStepper.styles";

import OrderSummary from "./steps/OrderSummary";
import CustomerDetails from "./steps/CustomerDetails";
import PaymentDetails from "./steps/PaymentDetails";
import OrderComplete from "./steps/OrderComplete";

const stepComponents = [
  <OrderSummary />,
  <CustomerDetails />,
  <PaymentDetails />,
  <OrderComplete />,
];

const renderStepContent = (step) => stepComponents[step] || null;

const steps = [
  "Order Summary",
  "Customer Details",
  "Payment Details",
  "Order Complete",
];

export default function HorizontalLinearStepper() {
  const { activeStep, next, back, reset } = useStep(steps.length);

  return (
    <StepperContainer>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <StepContentBox>{renderStepContent(activeStep)}</StepContentBox>

      {activeStep === steps.length ? (
        <>
          <CompleteText>
            All steps completed – you're finished
          </CompleteText>
          <ButtonContainer>
            <Spacer />
            <Button onClick={reset}>Reset</Button>
          </ButtonContainer>
        </>
      ) : (
        <ButtonContainer>
          <BackButton
            color="inherit"
            disabled={activeStep === 0}
            onClick={back}
          >
            Back
          </BackButton>
          <Spacer />
          <Button onClick={next}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </ButtonContainer>
      )}
    </StepperContainer>
  );
}
