import React from 'react';
import { connect } from 'react-redux';
import { writeToFirebase } from './redux/actions';
import { useState } from 'react';

function mapStateToProps(state) {
  return {
    messages: state.messages.messages,
  }
}

export default connect(mapStateToProps)(function Messages(props) {
  const { messages } = props;

  return (
    <>
    <ul>
      {messages.map(msg => (
        <li key={msg.id}>
          <b>{msg.from}</b> {msg.text}
        </li>
      ))}
    </ul>
    </>
  );
});
