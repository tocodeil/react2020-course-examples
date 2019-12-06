import { createStore } from 'redux';
import produce from 'immer';

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

function nextId(items) {
  return Math.max(...items.map(i => i.id)) + 1;
}

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'SET_USERNAME':
      state.username = action.payload;
      break;

    case 'RECEIVED_MESSAGE':      
      state.messages.push(action.payload);
      break;

    case 'CREATE_ROOM':
      state.rooms.push({ id: nextId(state.rooms), name: action.payload });
      break;

    case 'SET_ACTIVE_ROOM':
      state.activeRoomId = action.payload;
      break;

    case 'RECEIVED_ROOMS':
      state.rooms = action.payload;
      break;
  }
}, initialState);

const store = createStore(reducer);
window.store = store;
export default store;

