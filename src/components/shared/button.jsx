import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SharedButton({ label, to, ...rest }) {
  return (
    <Button component={to ? Link : "button"} to={to} {...rest}>
      {label}
    </Button>
  );
}

export default SharedButton;
