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

  function inc() {
    setCount(x => x + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
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
