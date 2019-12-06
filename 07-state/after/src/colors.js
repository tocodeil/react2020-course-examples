import React from 'react';
import { useState } from 'react';

export default function Colors(props) {
  const [colors, setColors] = useState({ red: true, blue: false, green: true });

  function toggleColor(color) {
    setColors(previousValue => (
      {
        ...previousValue,
        [color]: !previousValue[color],
      }));
  }

  return (
    <div>
      <label>
        Red
        <input type="checkbox" checked={colors.red} onChange={() => toggleColor('red')} />
      </label>
      <label>
        Blue
        <input type="checkbox" checked={colors.blue} onChange={() => toggleColor('blue')} />
      </label>
      <label>
        Green
        <input type="checkbox" checked={colors.green} onChange={() => toggleColor('green')} />
      </label>
    </div>
  );
}
