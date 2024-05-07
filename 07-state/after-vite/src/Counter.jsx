import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);
  const [arr, setArr] = useState([10, 20, 30]);

  function inc() {
    setCount(oldValue => oldValue + delta);
  }

  function reset() {
    setCount(0);
  }

  function handleChangeDelta(e) {
    // new input value = e.target.value
    setDelta(Number(e.target.value));
  }
  
  return (
    <div>
      <label>
        Increase By:
        <input type="number" value={delta} onChange={handleChangeDelta} />
      </label>
      <p>
        I was clicked {count} times        
        <button onClick={inc}>Click Me</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}

