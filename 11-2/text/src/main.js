import React from 'react';
import { useState } from 'react';

import ReactDOM from 'react-dom';
import Counter from './counter';

const App = () => {
  const [delta, setDelta] = useState(1);

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

      <h2>Counters:</h2>
      <Counter delta={delta} />
      <Counter delta={delta} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
