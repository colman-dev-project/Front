import React from 'react';
import { CustomAppBar, CustomToolbar, NavLinks } from './Navbar.styled';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import { UI_TEXT } from '../../constants/text';
import SharedTypography from '../shared/Text/SharedText.jsx';
import { BUTTON_VARIANTS } from '../../constants/buttonTypes.js';

function Navbar() {
  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <SharedTypography variant="h6">SecondHand Store</SharedTypography>
        <NavLinks>
          <ActionButton variantType={BUTTON_VARIANTS.NAVBAR} to={ROUTER_PATHS.HOME}>{UI_TEXT.HOME}</ActionButton>
          <ActionButton variantType={BUTTON_VARIANTS.NAVBAR} to={ROUTER_PATHS.ABOUT}>{UI_TEXT.ABOUT}</ActionButton>
        </NavLinks>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Navbar;
