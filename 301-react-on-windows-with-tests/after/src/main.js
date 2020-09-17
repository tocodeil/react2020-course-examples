import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

import '../css/main.css';

const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
      <Person name="ynon" />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
