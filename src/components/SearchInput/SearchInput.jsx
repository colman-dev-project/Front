import React from 'react';
import { Input } from './SearchInput.styled';

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
