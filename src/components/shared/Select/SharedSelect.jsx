import * as React from 'react';
import { useState } from 'react';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { StyledSelect } from './Select.styles';

export default function SharedSelect({ options = [], placeholder = "Select an option…", onSelect }) {
  const [selected, setSelected] = useState('');

  const handleChange = (event, newValue) => {
    setSelected(newValue);
    if (onSelect) {
      onSelect(newValue);
    }
  };

  const safeOptions = Array.isArray(options) ? options : [];

  return (
    <StyledSelect
      placeholder={placeholder}
      value={selected}
      onChange={handleChange}
      indicator={<KeyboardArrowDown />}
    >
      {safeOptions.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </StyledSelect>
  );
}
