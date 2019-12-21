import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setUsername, saveUsername } from './redux/actions';

function mapStateToProps(state) {
  return { username: state.username };
}

export default withRouter(connect(mapStateToProps)(function Login(props) {
  const { username, history } = props;
  const { dispatch } = props;

  function handleChange(e) {
    dispatch(setUsername(e.target.value));
  }

  function saveAndNavigate() {
    dispatch(saveUsername(history));
  }

  return (
    <div>
      <label>
        Please select a user name: 
        <input type="text" value={username} onChange={handleChange} />
        <button onClick={saveAndNavigate}>Save</button>
      </label>
      <Link to="/user">Next</Link>
    </div>
  );
}));
