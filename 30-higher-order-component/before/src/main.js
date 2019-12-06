import React from 'react';
import ReactDOM from 'react-dom';

class NewsTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemIndex: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const { items } = this.props;

    this.setState(state => ({ itemIndex: (state.itemIndex + 1) % items.length }));
  }

  render() {
    const { items } = this.props;
    const { itemIndex } = this.state;

    return (
      <p>{items[itemIndex]}</p>
    );
  }
}


class Clock extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { ticks: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState(state => ({ ticks: state.ticks + 1 }))
  }

  render() {
    const { ticks } = this.state;

    return (
      <p>Ticks... {ticks}</p>
    );
  }
}


const App = () => {

  const items = [
"I lit up from Reno",
"I was trailed by twenty hounds",
"Didn't get to sleep that night",
"Till the morning came around",
  ];

  return (
    <div>
      <Clock />
      <NewsTicker items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
