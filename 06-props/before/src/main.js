import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
