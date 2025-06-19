import { BUTTON_VARIANTS } from '../../constants/buttonTypes.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';
import { UI_TEXT } from '../../constants/text.js';
import ActionButton from '../shared/Button/ActionButton.jsx';


export const getAuthButton = ({ isLoggedIn, handleLogout, navigate }) => {
  return isLoggedIn ? (
    <ActionButton styleType={BUTTON_VARIANTS.FILLED} onClick={handleLogout}>
      {UI_TEXT.LOGOUT}
    </ActionButton>
  ) : (
    <ActionButton styleType={BUTTON_VARIANTS.FILLED} onClick={() => navigate(ROUTER_PATHS.LOGIN)}>
      {UI_TEXT.LOGIN}
    </ActionButton>
  );
};

export const mainNavItems = [
  { to: ROUTER_PATHS.HOME, label: UI_TEXT.HOME },
  { to: ROUTER_PATHS.ABOUT, label: UI_TEXT.ABOUT },
];
