import React from 'react';
import { StyledSelect } from './Select.styles';
import { MenuItem } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useSelect } from './useSelect'; 
import { DEFAULT_PLACEHOLDER } from '../constants/selectConstants';
import {UI_TEXT} from '../../../constants/text'


const renderSelectValue = (selected, currentOptions, currentPlaceholder) => {
  if (selected === '' || selected === undefined) {
    return currentPlaceholder;
  }
  
  const selectedOption = currentOptions.find(option => option.value === selected);
  return selectedOption ? selectedOption.label : currentPlaceholder;
};

export const SharedSelect = ({ options = [], placeholder = UI_TEXT.SELECT_AN_OPTION, value, onChange }) => {
  const { value: selectedValue, handleChange, options: currentOptions, placeholder: currentPlaceholder } = useSelect(value, options, placeholder);

  const handleSelectChange = (event) => {
    handleChange(event); 
    if (onChange) {
      onChange(event.target.value); 
    }
  };

  return (
    <StyledSelect
      value={selectedValue}
      onChange={handleSelectChange}
      displayEmpty
      IconComponent={KeyboardArrowDown}
      renderValue={(selected) => renderSelectValue(selected, currentOptions, currentPlaceholder)}
    >
      {currentOptions.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};
