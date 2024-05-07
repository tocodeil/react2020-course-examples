import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'Guest',
};

export const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUsername(state, action) {
      // action = { type: '...', payload: '...' }
      // Immer built-in
      state.username = action.payload;
    }
  },
});

window.slice = slice;

export const actions = slice.actions
export default slice.reducer;
