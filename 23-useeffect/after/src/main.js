import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function DocumentTitleChanger(props) {
  const [title, setTitle] = useState(document.title);  

  useEffect(function() {
    document.title = title;    
  }, [title]);

  return (
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
  );
}


const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
      <DocumentTitleChanger />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
