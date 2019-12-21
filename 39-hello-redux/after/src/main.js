import produce from 'immer';
import { createStore } from 'redux';
// npm install --save-dev redux

const initialState = {
  rooms: [
    { id: 0, name: 'Loby' },
    { id: 1, name: 'JavaScript Chats' },
  ],
  activeRoomId: 0,
  messages: [
    { id: 0, from: 'ynon', text: 'Hello Everyone' },
  ],
  username: "guest",
};

// { type: '...', payload: '...' }
const reducer = produce((state, action) => {
  // Inside immer - behave "mutable" => "immutable data"
  switch(action.type) {
    case 'SET_USERNAME':
      state.username = action.payload;
      break;

    case 'NEW_MESSAGE':
      state.messages.push(action.payload);
      break;
  }
}, initialState);

window.store = createStore(reducer);