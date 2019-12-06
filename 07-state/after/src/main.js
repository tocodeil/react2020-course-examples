import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import Colors from './colors';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Colors />
      <Counter />
      <Counter />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
