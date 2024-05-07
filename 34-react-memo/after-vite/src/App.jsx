import React, { useState } from 'react';
import Fiver from './Fiver';
import ColorPalette from './Colors';

function ColorSelector() {
  console.log('Color Selector');
  const [ticks, setTicks] = useState(0);
  const [color, setColor] = useState('#000000');

  return (
    <div>
      <div>
        <Fiver ticks={ticks} />
        <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

export default ColorSelector;
