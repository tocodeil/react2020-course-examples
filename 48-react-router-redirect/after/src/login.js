import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setUsername } from './redux/actions';

function mapStateToProps(state) {
  return { username: state.username };
}

export default withRouter(connect(mapStateToProps)(function Login(props) {
  const { username, history } = props;

  function handleChange(e) {
    const { dispatch } = props;
    dispatch(setUsername(e.target.value));
  }

  function login() {
    if (username.startsWith('a')) {
       history.push('/user');
    }
  }

  return (
    <div>
      <label>
        Please select a user name: 
        <input type="text" value={username} onChange={handleChange} />
        <button onClick={login}>Next Page</button>
      </label>
      <Link to="/user">Next</Link>
    </div>
  );
}));
