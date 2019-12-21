import produce from 'immer';
import { nextId } from './utils';

const initialState = {
    rooms: [
      { id: 0, name: 'Loby' },
      { id: 1, name: 'JavaScript Chats' },
    ],
    activeRoomId: 0,
};


export default produce((state, action) => {
  switch(action.type) {

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


