import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import useStep from './useStep';
import {
  containerStyle,
  StyledStepContentBox,
  buttonContainerStyle,
  spacerStyle,
  backButton,
} from './Stepper.styles';
import { UI_TEXT } from '../../constants/text';

import OrderSummary from './steps/OrderSummary';
import PaymentDetails from './steps/PaymentDetails';
import OrderComplete from './steps/OrderComplete';
import ActionButton from '../shared/Button/ActionButton';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';

const stepComponents = [
  <OrderSummary />,
  <PaymentDetails />,
  <OrderComplete />,
];

const steps = ['Order Summary', 'Payment Details', 'Order Complete'];

export default function HorizontalLinearStepper() {
  const { activeStep, handleNext, handleBack } = useStep(steps.length);
  const isFinalStep = activeStep === steps.length - 1;
  const nextButtonLabel =
    activeStep === steps.length - 2 ? UI_TEXT.FINISH : UI_TEXT.NEXT;

  return (
    <Box sx={containerStyle}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <StyledStepContentBox>{stepComponents[activeStep]}</StyledStepContentBox>

      {isFinalStep ? (
        <Box sx={buttonContainerStyle}>
          <Box sx={spacerStyle} />
          <ActionButton to={ROUTER_PATHS.HOME}>{UI_TEXT.GO_HOME}</ActionButton>
        </Box>
      ) : (
        <Box sx={buttonContainerStyle}>
          <ActionButton
            color="inherit"
            disabled={activeStep === 0 || isFinalStep}
            onClick={handleBack}
            sx={backButton}
          >
            {UI_TEXT.BACK}
          </ActionButton>
          <Box sx={spacerStyle} />
          <ActionButton onClick={handleNext}>{nextButtonLabel}</ActionButton>
        </Box>
      )}
    </Box>
  );
}
