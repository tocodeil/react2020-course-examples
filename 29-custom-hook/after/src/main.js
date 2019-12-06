import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function useTimer(ms=1000) {
  const [ticks, setTicks] = useState(0);

  function tick() {
    setTicks(v => v + 1);
  }

  useEffect(function() {
    const timer = setInterval(tick, ms);

    return function cancel() {
      clearInterval(timer);
    }
  }, []);

  return ticks;
}

function NewsTicker(props) {
  const { items } = props;
  const ticks = useTimer(2000);

  return (
    <p>{items[ticks % items.length]}</p>
  )
}


function Clock(props) {
  const ticks = useTimer();

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
