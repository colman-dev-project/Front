import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

export function useTabValue() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return {
    value,
    handleChange,
  };
}

export function useTransitionDuration(theme) {
  return {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
}
