import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setUserName } from './account';

async function sleep(ms) {
  return new Promise(done => {
    setTimeout(done, ms);
  });
}

export const joinRoom = createAsyncThunk('rooms/joinRoom', 
  async (roomId, { getState, dispatch }) => {
    const rooms = getState().rooms.rooms;
    const nextRoom = rooms.find(r => r.id === roomId);

    if (nextRoom) {
      dispatch(slice.actions.enterRoom(roomId));
    } else {
      await sleep(1000);
      
      if (!getState().rooms.rooms.find(r => r.id === roomId)) {
        dispatch(slice.actions.createRoom({ id: roomId, name: `Room ${roomId}` }));
      }
      dispatch(enterRoom(roomId));
    }
  });

window.joinRoom = joinRoom;

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
    createRoom(state, action) {
      state.rooms.push(action.payload);
    },
    enterRoom(state, action) {
      state.activeRoomId = action.payload;
    },
    leaveRoom(state) {
      state.activeRoomId = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserName, (state, action) => {
      state.activeRoomId = 0;
    })
  },
});

// Action creators are generated for each case reducer function
export const { enterRoom, leaveRoom } = slice.actions

export default slice.reducer;


