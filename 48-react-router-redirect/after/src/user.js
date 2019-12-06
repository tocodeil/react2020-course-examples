import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setUsername } from './redux/actions';

function mapStateToProps(state) {
  return { username: state.username };
}

export default connect(mapStateToProps)(function Login(props) {
  const { username } = props;

  if (!username) {
    return <Redirect to={{ pathname: '/', state: { flash: 'Please select a user name first' }}} />
  }

  return (
    <div>
      <p>Hello {username}</p>
    </div>
  );
});

