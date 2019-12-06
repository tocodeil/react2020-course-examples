import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function NewsTicker(props) {
  const { items } = props;
  const [itemIndex, setItemIndex] = useState(0);

  function tick() {
    setItemIndex(val => (val + 1) % items.length);
  }

  useEffect(function() {
    const timer = setInterval(tick, 1000);

    return function cancel() {
      clearInterval(timer);
    }
  }, []);

  return (
    <p>{items[itemIndex]}</p>
  )
}


function Clock(props) {
  const [ticks, setTicks] = useState(0);

  function tick() {
    setTicks(val => val + 1);
  }

  useEffect(function() {
    const timer = setInterval(tick, 1000);

    return function cancel() {
      clearInterval(timer);
    }
  }, []);

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
