import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomAppBar, CustomToolbar, NavLinks } from "./Navbar.styled";
import { capitalize } from "../../utils/string.js";
import { ENDPOINTS as ROUTER_PATHS } from "../../constants/routerPaths.js";

function Navbar() {
  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <Typography variant="h6">SecondHand Store</Typography>
        <NavLinks>
          <Button color="inherit" component={Link} to={ROUTER_PATHS.HOME}>
            {capitalize("home")}
          </Button>
          <Button color="inherit" component={Link} to={ROUTER_PATHS.ABOUT}>
            {capitalize("about")}
          </Button>
        </NavLinks>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Navbar;
