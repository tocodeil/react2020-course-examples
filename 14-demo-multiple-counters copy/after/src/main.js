import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Display(props) {
  const { score, isMax } = props;
  const backgroundColor = isMax ? 'lightblue' :  '#d2d2d2';

  return (
    <div style={{
      background: backgroundColor,
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
    </div>
  );
}

function Counter(props) {  
  const { isMax, count, inc } = props;

  return (
    <div>
      <Display isMax={isMax} score={count}  />
      <button onClick={inc}>Click Me</button>
    </div>
  );
}

const App = () => {
  const [ scores, setScores ] = useState([0, 0, 0, 0]);

  function inc(idx) {
    const newScores = [...scores];
    newScores[idx] += 1;
    setScores(newScores);
  }

  const max = scores.reduce((acc, val ) => val > acc ? val : acc);

  return (
    <div>
      <p>The largest counter is: {max} </p>
      <Counter  count={scores[0]} inc={() => inc(0) } isMax={scores[0] === max} />
      <Counter  count={scores[1]} inc={() => inc(1) } isMax={scores[1] === max} />
      <Counter  count={scores[2]} inc={() => inc(2) } isMax={scores[2] === max} />
      <Counter  count={scores[3]} inc={() => inc(3) } isMax={scores[3] === max} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
