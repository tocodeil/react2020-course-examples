import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from './redux/actions';

function mapStateToProps(state) {
    return {
        username: state.username,
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function Header(props) {
    const { username, dispatch } = props;

    function handleChangeEvent(e) {
        dispatch(setUsername(e.target.value));
    }

    return (
        <div className='header'>
            <label>
                Username: 
                <input type="text" onChange={handleChangeEvent} value={username} />

            </label>
        </div>
    )
});