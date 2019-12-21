import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";

function SelectableList(props) {
  const { items } = props;
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeItems, setActiveItems] = useState(items);

  function remove() {
    const toDeleteSet = new Set(selectedItems);
    setActiveItems(activeItems.filter(item => ! toDeleteSet.has(item)));
    setSelectedItems([]);
  }

  function reset() {
    setActiveItems(items);
    setSelectedItems([]);
  }

  function selectItem(e) {
    const checked = e.target.checked;
    const item = e.target.parentElement.textContent;

    if (checked) {
      setSelectedItems(selectedItems.concat([item]));
    } else {
      setSelectedItems(selectedItems.filter(x => x !== item));
    }
  }

  return (
    <>
      <p>Selected Itmes: {selectedItems.join(", ")}</p>
      <button onClick={remove}>Delete</button>
      <button onClick={reset}>Reset</button>
      <ul>
        {activeItems.map(item => (
          <li key={item} style={{ direction: "rtl" }}>
            <label>
              {item}
              <input
                type="checkbox"
                onChange={selectItem}
                checked={selectedItems.includes(item)}
              />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}


const App = () => {
  const items = ['one', 'two', 'three', 'four', 'five'];

  return (
    <div>
      <SelectableList items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
