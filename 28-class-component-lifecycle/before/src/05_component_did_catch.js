import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boom: false };
    this.boom = this.boom.bind(this);
  }
  
  boom() {
    this.setState({ boom: true });
  }
  
  render() {
    if (this.state.boom) {
      throw 'Boom!';
    }
    
    return (
      <button onClick={this.boom} key={this.state.bombs}>Boom!</button>
    )
  }
}

export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bombs: 0 };
  }
  
  componentDidCatch(error, info) {
    this.setState({
      bombs: this.state.bombs + 1,
    });
  }
  
  render() {
    return (
      <div>
        <p>{this.state.bombs} bombs blew up</p>
        <Bomb />
      </div>
    )
  }
}

