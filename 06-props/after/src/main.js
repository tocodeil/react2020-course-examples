import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

const App = () => {
  const colors = ['red', 'blue'];
  const p = Math.random();

  return (
    <div>
      <Person 
  
      favoriteColors={colors}
      show={p > 0.5}
      />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
