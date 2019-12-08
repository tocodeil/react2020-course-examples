import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { m: 0, s: 0 };
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    let { m, s } = this.state;
    if (s < 60) {
      s += 1;
    } else {
      s = 0;
      m += 1;
    }
    this.setState({ m, s });
  }

  render() {
    const {m, s} = this.state;
    return (
      <div>
        {String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
      </div>
    );
  }
}

