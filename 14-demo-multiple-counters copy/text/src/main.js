import React from 'react';
import ReactDOM from 'react-dom';
import { Counter, CounterGroup } from './counter_group_2';


const App = () => {

  return (
    <div>
      <CounterGroup>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
      </CounterGroup>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
