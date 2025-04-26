import { useState } from 'react';

export const useSelect = (initialValue = '', initialOptions = [], initialPlaceholder = 'Select an option...') => {
  const [value, setValue] = useState(initialValue);
  const [options, setOptions] = useState(initialOptions);
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    options,
    setOptions,
    placeholder,
    setPlaceholder,
    handleChange,
  };
};
