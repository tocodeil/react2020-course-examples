import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = () => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const refToWord2 = React.createRef();

  function setFirstWord(val) {
    setWord1(val);
    if (val.endsWith(' ')) {
      refToWord2.current.focus();      
    }
  }

  function setSecondWord(val) {
    setWord2(val);
  }


  return (
    <div>
      <input type="text" value={word1} onChange={(e) => setFirstWord(e.target.value)} />
      <input type="text" value={word2} onChange={(e) => setSecondWord(e.target.value)} ref={refToWord2} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
