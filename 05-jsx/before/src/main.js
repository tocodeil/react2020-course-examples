import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

import '../css/main.css';

const App = () => {
  return (
    <div>
      <Person name="jeff" />
      <Person name="bob" />
      <Person name="dana" />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
