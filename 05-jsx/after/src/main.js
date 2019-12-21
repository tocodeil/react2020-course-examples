import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

import '../css/main.css';

function MyGroup() {
  return (
    <>
    <p>one</p>
    <p>two</p>
    <p>three</p>
    </>
  )
}

const App = () => {
  const p = Math.random();

  return (
    <div>
      <MyGroup />
      <p>1 + 1 = {1 + 1}</p>
      <p>{p}</p>
      { p > 0.5 ? <Person name="jeff" /> : false }
      <Person name="da" />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
