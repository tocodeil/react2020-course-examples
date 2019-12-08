import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useRef } from 'react';

const MultiSelectAndDeleteList = (props) => {
  const { items } = props;
  const [ visibleItems, setVisibleItems ] = useState(items);  

  function reset() {
    setVisibleItems(items);
  }

  function deleteSelected() {
    // TODO
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={deleteSelected}>Delete</button>
      <ul>
        {visibleItems.map(item => (
          <li key={item}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );

}


const App = () => {
  const items = ['one', 'two', 'three', 'four', 'five'];
  return (
    <div>
      <MultiSelectAndDeleteList items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
