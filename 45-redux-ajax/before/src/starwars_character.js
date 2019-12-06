import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

function mapStateToProps(state, ownProps) {
  return {
    data: state.people[ownProps.id] || {}
  }
}

const StarwarsCharacterInfo = connect(mapStateToProps)(function StarwarsCharacterInfo(props) {
  const { data } = props;
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Height: {data.height}</p>
    </div>
  );
});

export default function StarwarsCharacter(props) {  
  const [id, setId] = useState(1);

  return (
    <div>
      <label>
        Character ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>

      <StarwarsCharacterInfo id={id} />
    </div>
  );
}
