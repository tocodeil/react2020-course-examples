import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YouTubePlayer from 'youtube-player';

function VideoPlayer({id}) {
  const playerDivRef = useRef(null);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {    
    playerRef.current = YouTubePlayer(playerDivRef.current);
    playerRef.current.on('stateChange', (e) => {
      setPlaying(e.data === 1);
    })
  }, [])

  useEffect(() => {
    playerRef.current.loadVideoById(id);
  }, [id])

  const playVideo = () => {
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    
  }
  
  return (
    <div className='my-player' >
      <input type="checkbox" checked={visible} onChange={() => setVisible(v => !v)} />
      <button onClick={playVideo}>{playing ? "Pause" : "Play"}</button>
      <div ref={playerDivRef} className='player' ></div>
    </div>
    
  )
}

function App() {
  return (
    <>
      <VideoPlayer id="ubPCgmkwi7Q" />
    </>
  )
}

export default App
