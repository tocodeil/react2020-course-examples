import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

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

      <Counter delta={delta} />
      <Counter delta={delta} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
