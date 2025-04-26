import * as React from 'react';
import SharedSelect from './SharedSelect';

export default function TestSelect() {
  const options = [
    { value: 'apple', label: 'תפוח' },
    { value: 'banana', label: 'בננה' },
    { value: 'orange', label: 'תפוז' },
  ];

  const handleSelect = (value) => {
    console.log('נבחר ערך:', value);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>בדיקה של SharedSelect</h1>
      <SharedSelect options={options} onSelect={handleSelect} />
    </div>
  );
}
