import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Display(props) {
  const { score, reset } = props;

  return (
    <div style={{
      background: '#d2d2d2',
      padding: '10px 2px',
      boxShadow: '0 0 1px 1px rgba(0,0,0,0.6)',
    }}>
      You scored:
      <div style={{
        display: 'inline-block',
        background: 'black',
        color: 'white',
        padding: '10px',
        fontFamily: 'Orbitron, sans-serif',
      }}>{score}</div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function Counter(props) {
  const [ count, setCount ] = useState(0);

  function inc() {
    setCount(x => x + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <pre>Debug: count = {count}</pre>
      <button onClick={reset}>Reset</button>
      <Display score={count} reset={reset} />
      <button onClick={inc}>Click Me</button>
    </div>
  );
}

const App = () => {

  return (
    <div>
      <p>The largest counter is: ... </p>
      <Counter  />
      <Counter  />
      <Counter  />
      <Counter  />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
