import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Display(props) {
  const { score, reset, isMax } = props;

  const displayStyle={
    color: isMax ? 'darkred' : 'darkgreen'
  }

  return (
    <div style={displayStyle}>
      You scored {score} points. <button onClick={reset}>Reset</button>
    </div>
  );
}

function Counter(props) {
  const {myIndex, counters, setCounters, getMaxIndex } = props;

  function inc() {
    const newValue = counters[myIndex] + 1;
    counters[myIndex] = newValue
    setCounters([...counters]);
  }

  function reset() {
    counters[myIndex] = 0;
    setCounters([...counters]);
  }
  
  return (
    <div>
      <Display score={counters[myIndex]} reset={reset} isMax={counters[myIndex] >= getMaxIndex(counters)}/>
      <button onClick={inc}>Click Me</button>
    </div>
  );
}

const App = () => {
  const [counters, setCounters] = useState([0,0,0,0]);

  function getMaxIndex(counters) {
    return Number(Math.max(...counters));
  }

  return (
    <div>
      <Counter myIndex='0' counters={counters} setCounters={setCounters} getMaxIndex={getMaxIndex}/>
      <Counter myIndex='1' counters={counters} setCounters={setCounters} getMaxIndex={getMaxIndex}/>
      <Counter myIndex='2' counters={counters} setCounters={setCounters} getMaxIndex={getMaxIndex}/>
      <Counter myIndex='3' counters={counters} setCounters={setCounters} getMaxIndex={getMaxIndex}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
