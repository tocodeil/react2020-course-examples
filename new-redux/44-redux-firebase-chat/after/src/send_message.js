import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { sendToFirebase } from './redux/actions';

function mapStateToProps(state) {
  return {
    username: state.account.username,
  };
}

export default connect(mapStateToProps)(function SendMessage(props) {
  const { username } = props;
    const [message, setMessage] = useState('');

    function sendMessage() {
        sendToFirebase(username,  message);
        setMessage('');
    }

  return (
    <div className='username'>
      <label>
        Message:
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </label>
    </div>
  );
});
