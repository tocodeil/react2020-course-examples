import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import YouTubePlayer from 'youtube-player';

function YoutubePlayer(props) {
  const [videoId, setVideoId] = useState('');
  const playerDiv = useRef(null);
  const player = useRef(null);

  useEffect(function() {
    player.current = new YouTubePlayer(playerDiv.current);
  }, []);

  useEffect(function() {
    player.current.loadVideoById(videoId);
  }, [videoId]);

  return (
    <div>
      <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} />
      <div ref={playerDiv} />
    </div>
  );
}


const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
      <YoutubePlayer />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
