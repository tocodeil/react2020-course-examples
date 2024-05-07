import React, { useState, useEffect } from 'react';

function DocumentTitleChanger() {
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

export default App
