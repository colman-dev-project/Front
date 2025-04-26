import React from 'react';
import { CustomAppBar, CustomToolbar, NavLinks } from './Navbar.styled';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';
import SharedLinkButton from '../shared/Button/SharedLinkButton.jsx';
import { UI_TEXT } from '../../constants/text';
import SharedTypography from '../shared/Text/SharedText.jsx';

function Navbar() {
  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <SharedTypography variant="h6">SecondHand Store</SharedTypography>
        <NavLinks>
          <SharedLinkButton to={ROUTER_PATHS.HOME} label={UI_TEXT.HOME} />
          <SharedLinkButton to={ROUTER_PATHS.ABOUT} label={UI_TEXT.ABOUT} />
        </NavLinks>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Navbar;
