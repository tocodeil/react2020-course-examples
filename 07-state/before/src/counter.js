import React from 'react';
import { useState } from 'react';

export default function Counter(props) {
  const count = 0;
  
  return (
    <div>
      <label>
        Increase By:
        <input type="number" />
      </label>
      <p>
        I was clicked {count} times        
        <button>Click Me</button>
      </p>
    </div>
  );
}
