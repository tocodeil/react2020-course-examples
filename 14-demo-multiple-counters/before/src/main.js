import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Display(props) {
  const { score, reset } = props;
  return (
    <div>
      You scored {score} points. <button onClick={reset}>Reset</button>
    </div>
  );
}

function Counter(props) {
  const [ count, setCount ] = useState(0);
  const { maxValue, setMaxValue } = props;

  function inc() {
    const newValue = count + 1;
    setCount(newValue);
    
    if (newValue > maxValue) {
      setMaxValue(newValue);
    } 
  }

  function reset() {
    setCount(0);
  }

  const counterStyle={
    color: count >= maxValue ? 'darkred' : 'darkgreen'
  }

  return (
    <div style={counterStyle}>
      <Display score={count} reset={reset} />
      <button onClick={inc}>Click Me</button>
    </div>
  );
}

const App = () => {
  const [maxValue, setMaxValue] = useState(0);

  return (
    <div>
      <Counter maxValue={maxValue} setMaxValue={setMaxValue} />
      <Counter maxValue={maxValue} setMaxValue={setMaxValue} />
      <Counter maxValue={maxValue} setMaxValue={setMaxValue} />
      <Counter maxValue={maxValue} setMaxValue={setMaxValue} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
