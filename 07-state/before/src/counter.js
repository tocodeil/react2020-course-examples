import React from 'react';
import { useState } from 'react';

export default function Counter({delta, setDelta}) {
  const [count, setCount] = useState(0);

  function inc(){
    const newVal = old => old+delta;
    if(newVal > 10) {
      setDelta(0);
    }
    setCount(newVal);
  }
  
  return (
    <div>
      <h1>Hello!!! David</h1>
      <p>
        I was clicked {count} times        
        <button onClick={inc}>Click Me</button>
      </p>
    </div>
  );
}
