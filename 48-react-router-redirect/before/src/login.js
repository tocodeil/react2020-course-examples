import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUsername } from './redux/actions';

function mapStateToProps(state) {
  return { username: state.username };
}

export default connect(mapStateToProps)(function Login(props) {
  const { username } = props;

  function handleChange(e) {
    const { dispatch } = props;
    dispatch(setUsername(e.target.value));
  }

  return (
    <div>
      <label>
        Please select a user name: 
        <input type="text" value={username} onChange={handleChange} />
      </label>
      <Link to="/user">Next</Link>
    </div>
  );
});
