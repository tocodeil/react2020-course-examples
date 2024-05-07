import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rooms: [
    { id: 0, name: 'Loby' },
    { id: 1, name: 'JavaScript Chats' },
  ],
  activeRoomId: 0,
};

export const slice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    createRoom(state, action) {
      // action.payload = { id: '..', name: '...' }
      state.rooms.push(action.payload);
    },

    setActiveRoom(state, action) {
      state.activeRoomId = action.payload;
    }
  },
});

export const actions = slice.actions
export default slice.reducer;

