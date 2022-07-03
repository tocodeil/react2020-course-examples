import { createSlice, createAction, nanoid } from '@reduxjs/toolkit'

const initialState = {
  messages: [],
};

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
  reducers: {
    setMessages(state, action) {
      state.messages = action.payload;
    }
  },
  extraReducers: {
    [newMessage]: (state, action) => {
      state.push(action.payload);
    }
  },
});

export default slice.reducer;
export const { setMessages } = slice.actions;
