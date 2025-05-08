import React from 'react';
import { StyledRating } from './Ranking.styles';
import useRanking from './useRanking';

export default function SharedRanking({
  label = '',
  initialValue = 0,
  max = 5,
  onChange = () => {},
  readOnly = false,
}) {
  const { value, setValue } = useRanking(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {label && <span>{label}</span>}
      <StyledRating
        name="shared-ranking"
        value={value}
        onChange={handleChange}
        max={max}
        readOnly={readOnly}
      />
    </div>
  );
}
