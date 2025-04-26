import React from 'react';
import { StyledSelect } from './Select.styles'; // Import StyledSelect
import { MenuItem } from '@mui/material'; // Import MenuItem from MUI
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'; // Import MUI icon

export const SharedSelect = ({
  options = [],
  placeholder = 'Select an option...',
  value,
  onChange,
}) => {
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      displayEmpty
      IconComponent={KeyboardArrowDown}
      renderValue={(selected) => (selected === '' ? placeholder : selected)}
    >
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};
