import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import Counter from './counter';
import Colors from './colors';

const App = () => {
  const [delta, setDelta] = useState(1);

  function changeDelta(e) {
    setDelta(Number(e.target.value))
  }

  return (
    <div>
       <label>
        Increase By:
        <input type="number" value={delta} onChange={changeDelta}/>
      </label>
      <Counter delta={delta}/>
      <Counter delta={delta}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
