import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function Timer(props) {
  const [ticks, setTicks] = useState(0);

  useEffect(function() {
    // What to do
    const timer = setInterval(function() {
      console.log('Ouch!');
      setTicks(t => t + 1);
    }, 1000);
    
    // What to undo
    return function abort() {
      clearInterval(timer);
    }
    
    // When to undo/do
  }, []);

  function tick() {
    setTicks(val => val + 1);
  }

  return (
    <p>Ticks: {ticks}</p>
  );
}

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  function toggleTimer() {
    setShowTimer(val => !val);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={toggleTimer}>Hide/Show timer</button>
      {showTimer && <Timer />}
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
