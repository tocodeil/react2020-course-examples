import { useEffect, useRef, useState } from 'react'
import YouTubePlayer from 'youtube-player'

const VideoPlayer = ({videoId}) => {
  const playerDivRef = useRef(null);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {    
    playerRef.current = YouTubePlayer(playerDivRef.current);
    playerRef.current.on('stateChange', (e) => {
      setPlaying(e.data === 1);
    })
  }, [])

  useEffect(() => {
    playerRef.current.loadVideoById(videoId);  
  }, [videoId])

  const playVideo = () => {
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    
  }

  return (
    <>
      <button onClick={playVideo}>{playing ? "Pause" : "Play"}</button>
      <div ref={playerDivRef}></div>
    </>
    
  )
}

function Toggle() {
  return (
    <div>
      <VideoPlayer videoId="efGw88Wlncw" />
    </div>
  )
}
export default Toggle