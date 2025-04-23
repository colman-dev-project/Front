import React from "react";
import { Typography } from "@mui/material";
import { CustomAppBar, CustomToolbar, NavLinks } from "./Navbar.styled";
import { capitalize } from "../../utils/string.js";
import { ROUTES as ROUTER_PATHS } from "../../constants/routerPaths.js";
import SharedButton from "../shared/button";

function Navbar() {
  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <Typography variant="h6">SecondHand Store</Typography>
        <NavLinks>
          <SharedButton color="inherit" to={ROUTER_PATHS.HOME} label={capitalize("home")} />
          <SharedButton color="inherit" to={ROUTER_PATHS.ABOUT} label={capitalize("about")} />
        </NavLinks>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Navbar;
