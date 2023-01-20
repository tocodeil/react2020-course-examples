/*
import { createStore } from 'redux';
import produce from 'immer';

export function receivedRooms(newListOfRooms) {
  return { type: 'RECEIVED_ROOMS', payload: newListOfRooms };
}

export function setActiveRoom(roomId) {
  return { type: 'SET_ACTIVE_ROOM', payload: roomId };
}

export function createRoom(roomName) {
  return { type: 'CREATE_ROOM', payload: roomName };
}

export function receivedMessage(message) {
  return { type: 'RECEIVED_MESSAGE', payload: message };
}

export function setUsername(newUsername) {
  return { type: 'SET_USERNAME', payload: newUsername };
}

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

*/

import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/account';
import messagesReducer from './slices/messages';
import roomsReducer from './slices/rooms';

const store = configureStore({
  reducer: {
    account: accountReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
  },
});


window.store = store;

export default store;












