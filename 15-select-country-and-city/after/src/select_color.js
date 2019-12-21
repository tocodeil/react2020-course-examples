import React from 'react';
import { useState } from 'react';

export default function SelectColor(props) {
  const colors = ['red', 'blue', 'yellow', 'green'];
  const [ color, setColor ] = useState(null);

  return (
    <>
      <p>Selected Color: {color}</p>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option disabled selected value>Please select a color</option>
        {colors.map((color, index) => (
          <option value={color}>{color}</option>
        ))}
      </select>
    </>
  );
}


