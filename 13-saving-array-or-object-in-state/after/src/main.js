import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

/**
 * 1. Display checked of input <-> selected item
 * 2. Clicking on an item selects/unselects it
 * 3. Fix bug
 */

function SelectableList(props) {
  const { items } = props;
  const [selectedItems, setSelectedItems] = useState(new Set());  

  function toggleItem(add, item) {    
    if (add) {
      selectedItems.add(item);
    } else {
      selectedItems.delete(item);
    }

    console.log(selectedItems);

    // DON'T DO THIS
    setSelectedItems(new Set(selectedItems));
  }

  return (
    <>
      <p>Selected Items: {Array.from(selectedItems).join(', ')}</p>
      <ul>
        {items.map(item => (
          <li key={item} style={{ direction: "rtl" }}>
            <label>
              {item}
              <input
              type="checkbox"
              checked={selectedItems.has(item)}
              onChange={(e) => toggleItem(e.target.checked, item)}
              />
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
