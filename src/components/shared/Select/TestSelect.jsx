import React, { useState } from 'react';
import { SharedSelect } from './SharedSelect'; // Adjust the import path

export const ExamplePage = () => {
  const [pet, setPet] = useState('');

  const options = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'fish', label: 'Fish' },
    { value: 'bird', label: 'Bird' },
  ];

  return (
    <div>
      <SharedSelect
        options={options}
        placeholder="Select a pet..."
        value={pet}
        onChange={(e) => setPet(e.target.value)}
      />
    </div>
  );
};
