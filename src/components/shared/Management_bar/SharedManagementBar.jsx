import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, AppBar, Tabs, Tab, Typography, Zoom, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTabValue, useTransitionDuration } from './useTabValue';
import { useTheme } from '@mui/material/styles';
import {
  fabStyle,
  fabGreenStyle,
  tabPanelStyle,
  fabContainerStyle,
  containerOuterBox,
  StyledAppBar,
} from './ShaedManagementBar.styled';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={tabPanelStyle}>{children}</Box>}
    </Typography>
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
  const transitionDuration = useTransitionDuration(useTheme());
  const theme = useTheme();

  const managerTabs = [
    { label: 'Orders', content: 'Manager Orders Content' },
    { label: 'Products', content: 'Manager Products Content' },
    { label: 'Customers', content: 'Manager Customers Content' },
    { label: 'Dashboard', content: 'Manager Dashboard Content' },
  ];

  const customerTabs = [
    { label: 'Orders', content: 'Orders Content' },
    { label: 'Profile', content: 'Profile Content' },
  ];

  const tabs = role === 'manager' ? managerTabs : customerTabs;

  const allFabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
      onClick: () => handleFabAction('add', value),
    },
    {
      color: 'inherit',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
      onClick: () => handleFabAction('edit', value),
    },
    {
      color: 'warning',
      sx: fabStyle,
      icon: <RemoveIcon />,
      label: 'Remove',
      onClick: () => handleFabAction('remove', value),
    },
  ];

  const handleFabAction = (action, tabIndex) => {
    console.log(
      `Role: ${role}, Tab: ${tabs[tabIndex].label}, Action: ${action}`,
    );
    // TODO implement the components that are based on action and tab
  };

  const getVisibleFabs = (tabIndex) => {
    const currentTabLabel = tabs[tabIndex].label;

    if (role === 'manager') {
      if (currentTabLabel === 'Orders') {
        return [allFabs[0]];
      }
      if (currentTabLabel === 'Products') {
        return [allFabs[0], allFabs[1]];
      }
      if (currentTabLabel === 'Customers') {
        return [allFabs[1], allFabs[2]];
      }
      return [];
    }

    if (role === 'customer') {
      if (currentTabLabel === 'Orders') {
        return [allFabs[0]];
      }
      return [];
    }

    return [];
  };

  return (
    <Box style={containerOuterBox}>
      <StyledAppBar>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
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
            {tab.content}
          </TabPanel>
        ))}
      </Box>

      <Box
        style={{
          fabContainerStyle,
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        {getVisibleFabs(value).map((fab) => (
          <Zoom
            key={fab.label}
            in={tabs.length > 0}
            timeout={transitionDuration}
            unmountOnExit
          >
            <Fab
              sx={fab.sx}
              aria-label={fab.label}
              color={fab.color}
              onClick={fab.onClick}
            >
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </Box>
    </Box>
  );
}
