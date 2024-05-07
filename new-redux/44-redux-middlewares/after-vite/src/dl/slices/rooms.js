import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setUserName } from './account';

async function sleep(ms) {
  return new Promise(done => {
    setTimeout(done, ms);
  });
}

async function enterRoomActionCreator(roomId, { getState, dispatch }) {
  const rooms = getState().rooms.rooms;
  const nextRoom = rooms.find(r => r.id === roomId);
  if (nextRoom) {
    return Promise.resolve(nextRoom);
  } else {
    await sleep(1000);
    return {
      id: roomId,
      name: `Room ${roomId}`
    };
  }
}

export const enterRoom = createAsyncThunk('rooms/enterRoom', enterRoomActionCreator);

const initialState = {
  activeRoomId: 1,
  rooms: [
    { id: 0, name: 'Loby' },
    { id: 1, name: 'JavaScript Chats' },
  ],
}

export const slice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    leaveRoom(state) {
      state.activeRoomId = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(enterRoom.fulfilled, (state, action) => {
      const newRoom = action.payload;
      if (!state.rooms.find(r => r.id === newRoom.id)) {
        // room is not in my list
        state.rooms.push(newRoom);
      }
      state.activeRoomId = newRoom.id;
    });

    builder.addCase(setUserName, (state, _action) => {
      state.activeRoomId = 0;
    });
  },
});

// Action creators are generated for each case reducer function
export const { leaveRoom } = slice.actions

export default slice.reducer;

window.enterRoom = enterRoom;
