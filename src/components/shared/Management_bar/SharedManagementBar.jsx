import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab } from '@mui/material';
import { useTabValue } from './useTabValue';
import {
  tabPanelStyle,
  containerOuterBox,
  StyledAppBar,
} from './SharedManagementBar.styled';
import SharedTypography from '../Text/SharedText';
import ManagerCustomers from './Tabs/ManagerCustomers';
import ManagerDashboard from './Tabs/ManagerDashboard';
import ManagerOrders from './Tabs/ManagerOrders';
import ManagerProducts from './Tabs/ManagerProducts';
import ManagerLockers from './Tabs/ManagerLockers';
import UserOrders from './Tabs/UserOrders';
import UserProducts from './Tabs/UserProducts';
import UserProfile from './Tabs/UserProfile';
import { UI_TEXT } from '../../../constants/text';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <SharedTypography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={tabPanelStyle}>{children}</Box>}
    </SharedTypography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom({ role }) {
  const { value, handleChange } = useTabValue();

  const tabs =
    role === UI_TEXT.MANAGER
      ? [
          { label: UI_TEXT.ORDER, component: <ManagerOrders /> },
          { label: UI_TEXT.PRODUCTS, component: <ManagerProducts /> },
          { label: UI_TEXT.CUSTOMERS, component: <ManagerCustomers /> },
          { label: UI_TEXT.LOCKERS, component: <ManagerLockers /> },
          { label: UI_TEXT.DASHBOARD, component: <ManagerDashboard /> },
        ]
      : [
          { label: UI_TEXT.ORDER, component: <UserOrders /> },
          { label: UI_TEXT.PRODUCTS, component: <UserProducts /> },
          { label: UI_TEXT.PROFILE, component: <UserProfile /> },
        ];

  return (
    <Box style={containerOuterBox}>
      <StyledAppBar>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="role-based tabs"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </StyledAppBar>

      <Box>
        {tabs.map((tab, index) => (
          <TabPanel value={value} index={index} key={index}>
            {tab.component}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
