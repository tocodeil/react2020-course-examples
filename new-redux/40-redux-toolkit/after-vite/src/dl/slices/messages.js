import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messages: [
    { id: 0, from: 'ynon', text: 'Hello Everyone' },
  ],
};

export const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    receivedMessage(state, action) {
      state.messages.push(action.payload);
    }
  },
});

export const actions = slice.actions
export default slice.reducer;

