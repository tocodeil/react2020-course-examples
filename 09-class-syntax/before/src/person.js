import React from 'react';
import { useState } from 'react';

import _ from 'lodash';

Person.defaultProps = {
  name: 'Visitor',
}

export default function Person(props) {
  const { name } = props;
  const [mood, setMood] = useState(getRandomMood());

  function changeMood() {
    setMood(getRandomMood());
  }

  const style = { color: moods[mood] };
  
  return (
    <p style={style}>
      Hello. My name is {name} and I'm {mood}
      <button onClick={changeMood}>Change Mood</button>
    </p>
  );
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

