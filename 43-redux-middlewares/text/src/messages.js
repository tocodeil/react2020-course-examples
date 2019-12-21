import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    messages: state.messages.messages,
  }
}

export default connect(mapStateToProps)(function Messages(props) {
  const { messages } = props;

  return (    
    <ul>
      {messages.map(msg => (
        <li key={msg.id}>
          <b>From: {msg.from}</b> {msg.text}
        </li>
      ))}
    </ul>
  );
});
