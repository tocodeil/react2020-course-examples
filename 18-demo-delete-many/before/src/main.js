import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";

function SelectableList(props) {
  const { items } = props;

  return (
    <>
      <button>Delete</button>
      <button>Reset</button>
      <ul>
        {items.map(item => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
              />
              {item}
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
