import React from 'react';
import { StyledCheckbox } from './checkbox.styles';
import useCheckbox from './useCheckbox';

export default function SharedCheckbox({
  label = '',
  initialChecked = false,
  onChange = () => {},
}) {
  const { checked, toggle } = useCheckbox(initialChecked);

  const handleChange = (event) => {
    toggle();
    onChange(event.target.checked);
  };

  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <StyledCheckbox checked={checked} onChange={handleChange} />
      {label}
    </label>
  );
}
