import { useState } from 'react';

export default function Counter(props) {
  const { delta } = props;
  const [count, setCount] = useState(0);
  
  function inc() {
    setCount(x => x + delta);
  }

  return (
    <div>

      <p>
        I was clicked {count} times        
        <button onClick={inc}>Click Me</button>
      </p>
    </div>
  );
}

