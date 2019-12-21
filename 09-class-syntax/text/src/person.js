import React from 'react';
import _ from 'lodash';

const moods = {
  happy: 'pink',
  sad: 'blue',
  angry: 'red',
  tranquil: 'green',
}

function getRandomMood() {
  return _.sample(Object.keys(moods));  
}

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: getRandomMood() };
    this.changeMood = this.changeMood.bind(this);
  }

  changeMood() {
    this.setState( { mood: getRandomMood() });
  }

  render() {
    const { name } = this.props;
    const { mood } = this.state;
    const color = moods[mood];
    const style = { color };

    return (
      <p style={style}>
      Hello. My name is {name} and I'm {mood}
      <button onClick={this.changeMood}>Change Mood</button>
      </p>
    );
  }
}

Person.defaultProps = {
  name: 'Visitor',
}
