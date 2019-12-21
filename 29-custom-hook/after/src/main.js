import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

// Custom hook is a function
// starts with useXXX
// can call useState, useEffect, useRef, useXXX

function useClock() {
  const [ticks, setTicks] = useState(0);

  useEffect(function() {
    const timer = setInterval(function() {
      setTicks(t => t + 1);
    }, 1000);

    return function cancel() {
      clearInterval(timer);
    }
  }, []);
  
  return ticks;
}

function NewsTicker(props) {
  const { items } = props;
  const ticks = useClock(); // Custom Hook

  const itemIndex = ticks % items.length;

  return (
    <p>{items[itemIndex]}</p>
  )
}


function Clock(props) {
  const ticks = useClock();

  return (
    <div>
      Ticks... {ticks}
    </div>
  );
}


const App = () => {

  const items = [
"I lit up from Reno",
"I was trailed by twenty hounds",
"Didn't get to sleep that night",
"Till the morning came around",
  ];

  return (
    <div>
      <Clock />
      <NewsTicker items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
