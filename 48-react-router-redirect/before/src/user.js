import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from './redux/actions';

function mapStateToProps(state) {
  return { username: state.username };
}

export default connect(mapStateToProps)(function Login(props) {
  const { username } = props;

  return (
    <div>
      <p>Hello {username}</p>
    </div>
  );
});

