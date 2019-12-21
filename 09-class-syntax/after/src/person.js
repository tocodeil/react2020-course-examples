import React from 'react';
import _ from 'lodash';


export default class Person extends React.Component {
  constructor(props) {
    super(props);
    // can do all nice stuff
    // mainly - create a state
    this.state = { mood: getRandomMood(), foo: 'bar' };
    this.changeMood = this.changeMood.bind(this);
  }

  changeMood() {
    this.setState({ mood: getRandomMood() });    
  }

  render() {
    const { name } = this.props;
    const { mood } = this.state;
    const style = { color: moods[mood]};

    return (
      <p style={style}>
      Hello. My name is {name} and I'm {mood}
      <button onClick={this.changeMood}>Change Mood</button>
    </p>
    );

  }    
}

Person2.defaultProps = {
  name: 'Visitor',
}

const moods = {
  happy: 'pink',
  sad: 'blue',
  angry: 'red',
  tranquil: 'green',
}

function getRandomMood() {
  return _.sample(Object.keys(moods));  
}

