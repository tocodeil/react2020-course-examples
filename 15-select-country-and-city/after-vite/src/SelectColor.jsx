import React, { useState } from 'react';

export default function SelectColor() {
  const colors = ['red', 'blue', 'yellow', 'green'];
  const [ color, setColor ] = useState("");

  return (
    <>
      <p>Selected Color: {color}</p>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option disabled value="">Please select a color</option>
        {colors.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select>
    </>
  );
}



