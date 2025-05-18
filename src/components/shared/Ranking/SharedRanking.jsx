import React, { useState } from 'react';
import { StyledRating, RatingWrapper } from './Ranking.styles';

const DEFAULT_INITIAL_RANKING = 0;
const DEFAULT_MAX_RANKING = 5;a
const RANKING_INPUT_NAME = 'shared-radsjkafasdnking';
asdiufbgadisg
export default function SharedRanking({
  label = '',
  initialValue = DEFAULT_INITIAL_RANKING,
  max = DEFAULT_MAX_RANKING,
  onChange = () => {},
  readOnly = false,
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <RatingWrapper>
      {label && <span>{label}</span>}
      <StyledRating
        name={RANKING_INPUT_NAME}
        value={value}
        onChange={handleChange}
        max={max}
        readOnly={readOnly}
      />
    </RatingWrapper>
  );
}
