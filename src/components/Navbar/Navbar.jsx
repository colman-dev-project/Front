import React from 'react';
import { CustomAppBar, CustomToolbar, NavLinks } from './Navbar.styled';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import { UI_TEXT } from '../../constants/text';
import SharedTypography from '../shared/Text/SharedText.jsx';
import { BUTTON_VARIANTS } from '../../constants/buttonTypes.js';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutUserMutation } from '../../services/authApi.js';
import { logout } from '../../store/authSlice.js';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    await logoutUser().unwrap();
    dispatch(logout());
  };

  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <SharedTypography variant="h6">SecondHand Store</SharedTypography>
        <NavLinks>
          <ActionButton styleType={BUTTON_VARIANTS.NAVBAR} to={ROUTER_PATHS.HOME}>{UI_TEXT.HOME}</ActionButton>
          <ActionButton styleType={BUTTON_VARIANTS.NAVBAR} to={ROUTER_PATHS.ABOUT}>{UI_TEXT.ABOUT}</ActionButton>
        </NavLinks>
        <NavLinks>
        {isLoggedIn ? (
          <ActionButton styleType={BUTTON_VARIANTS.FILLED} onClick={handleLogout}>
            {UI_TEXT.LOGOUT}
          </ActionButton>
        ) : (
          <ActionButton styleType={BUTTON_VARIANTS.FILLED} onClick={() => navigate(ROUTER_PATHS.LOGIN)}>
            {UI_TEXT.LOGIN}
          </ActionButton>
        )}
          </NavLinks>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Navbar;
