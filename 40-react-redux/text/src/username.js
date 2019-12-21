import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from './redux/actions';

function mapStateToProps(state) {
  return {
    username: state.username,
  };
}

export default connect(mapStateToProps)(function Username(props) {
  const { username, dispatch } = props;

  function handleChange(e) {
    dispatch(setUsername(e.target.value));
  }

  return (
    <div className='username'>
      <label>
        User Name:
        <input type="text" value={username} onChange={handleChange} />
      </label>
    </div>
  );
});
