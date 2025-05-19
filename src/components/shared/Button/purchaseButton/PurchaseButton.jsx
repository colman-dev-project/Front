import React from "react";
import { StyledPurchaseButton } from "./PurchaseButton.styles.js";

const PurchaseButton = ({ children, ...props }) => (
  <StyledPurchaseButton
    variant="contained"
    fullWidth
    {...props}
  >
    {children}
  </StyledPurchaseButton>
);

export default PurchaseButton;
