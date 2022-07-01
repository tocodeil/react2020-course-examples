import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeRoomId: 0,
  rooms: [
    { id: 0, name: 'Loby' },
    { id: 1, name: 'JavaScript Chats' },
  ],
}

export const slice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    enterRoom(state, action) {
      const { room } = action.payload;
      state.activeRoomId = room.id;
    },
    leaveRoom(state) {
      state.activeRoomId = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { enterRoom, leaveRoom } = slice.actions

export default slice.reducer;


