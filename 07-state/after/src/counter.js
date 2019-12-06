import React from 'react';
import { useState } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);

  function inc() {
    setCount(x => x + delta);
  }

  function handleChangeDelta(e) {
    const newValue = Number(e.target.value);
    setDelta(newValue);
  }

  return (
    <div>
      <label>
        Increase By:
        <input type="number" value={delta} onChange={handleChangeDelta} />
      </label>
      <p>
        I was clicked {count} times        
        <button onClick={inc}>Click Me</button>
      </p>
    </div>
  );
}
