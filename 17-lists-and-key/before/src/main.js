import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function CheckableList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map(item => (
        <li>
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

  return (
    <div>
      <button>Shuffle</button>
      <CheckableList items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
