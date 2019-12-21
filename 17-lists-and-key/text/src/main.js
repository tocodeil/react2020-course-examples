import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { useState } from 'react';

function CheckableList(props) {
  const { items } = props;
  const [nonce, setNonce] = useState(0);

  function reset() {
    setNonce(v => v + 1);
  }

  return (
    <ul key={nonce}>
      <button onClick={reset}>Reset</button>
      {items.map(item => (
        <li key={item}>
          <label>            
            <input type="checkbox" />
            {item}
          </label>
        </li>
      ))}
    </ul>
  );
}


const App = () => {
  const [items, setItems] = useState(['one', 'two', 'three', 'four', 'five']);

  function shuffle() {
    setItems(_.shuffle(items));
  }

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <CheckableList items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
