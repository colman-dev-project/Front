import { useState } from 'react';

export default function useCheckbox(initialChecked = false) {
  const [checked, setChecked] = useState(initialChecked);

  const toggle = () => setChecked((prev) => !prev);
  const setTrue = () => setChecked(true);
  const setFalse = () => setChecked(false);

  return {
    checked,
    toggle,
    setTrue,
    setFalse,
    setChecked,
  };
}
