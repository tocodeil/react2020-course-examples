import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';
import Person from './Person';

const App = () => {

  return (
    <div>
      <h1>Hello World!!!</h1>
      <Person name="Techiya" likes="Choclate"/>
      <Person name="David" likes="Cherries"/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
