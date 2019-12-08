import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';

function YoutubePlayer(props) {
  const [videoId, setVideoId] = useState('');

  return (
    <div>
      <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} />
      <div className='player-div' />
    </div>
  );
}


const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
