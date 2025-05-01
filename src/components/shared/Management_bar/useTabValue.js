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
