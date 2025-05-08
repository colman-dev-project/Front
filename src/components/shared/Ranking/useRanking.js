import { useState } from 'react';

export default function useRanking(initialValue = 0) {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(0);

  return {
    value,
    setValue,
    reset,
  };
}
