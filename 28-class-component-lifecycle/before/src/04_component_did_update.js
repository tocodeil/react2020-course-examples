import React from 'react';

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

const youtubeReady = new Promise(function(resolve, reject) {
  window.onYouTubeIframeAPIReady = function() {
    resolve(YT.Player);
  };
});

export default class Demo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.player = null;
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ playing: !this.state.playing });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playing) {
      this.player.playVideo();
    } else {
      this.player.pauseVideo();      
    }
  }
  

  componentDidMount() {
    youtubeReady.then((Player) => {
      this.player = new Player(this.el, {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',        
      });
    });
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.toggle}>Play / Pause</button>
          Current state: {this.state.playing ? 'Play' : 'Stop'}
        </p>

        <div ref={(el) => {this.el = el; }}></div>
      </div>
    );
  }
}

