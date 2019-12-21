import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from './redux/actions';
import { Redirect, Link } from 'react-router-dom';

function mapStateToProps(state) {
  return { username: state.username };
}

export default connect(mapStateToProps)(function Login(props) {
  const { username } = props;

  if (!username || username.length === 0) {
    return <Redirect to={{ pathname: '/', state: { flash: 'Missing user name' }}}  />
  }

  return (
    <div>
      <p>Hello {username}</p>
      <Link to="/">Back to login page</Link>
    </div>
  );
});

