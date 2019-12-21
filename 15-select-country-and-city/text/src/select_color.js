import React from 'react';
import { useState } from 'react';

export default function SelectColor(props) {
  const colors = ['red', 'blue', 'yellow', 'green'];
  const [ color, setColor ] = useState('red');

  return (
    <>
      <p>Selected Color: {color}</p>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {colors.map((color, index) => (
          <option value={color}>{color}</option>
        ))}
      </select>
    </>
  );
}


