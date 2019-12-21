import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

const App = () => {

  return (
    <div>
      <Person name="one" />
      <Person name="two" />
      <Person />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
