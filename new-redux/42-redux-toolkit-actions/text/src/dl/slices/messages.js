import { createSlice, createAction, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: 0, from: 'ynon', text: 'Hello Everyone' },
];

export const newMessage = createAction('messages/newMessage', (from, text) => {
  return {
    payload: {
      from,
      text,
      id: nanoid(),
    },
  };
});

export const slice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: {
    [newMessage]: (state, action) => {
      state.push(action.payload);
    }
  },
});

export default slice.reducer;

window.newMessage = newMessage;
