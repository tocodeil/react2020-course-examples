import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function SelectableList(props) {
  const { items } = props;
  const [selectedItems, setSelectedItems] = useState(new Set());

  return (
    <>
      <p>Selected Items: {Array.from(selectedItems).join(', ')}</p>
      <ul>
        {items.map(item => (
          <li key={item} style={{ direction: "rtl" }}>
            <label>
              {item}
              <input type="checkbox" />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}


const App = () => {
  const days = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div>
      <SelectableList items={days}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
