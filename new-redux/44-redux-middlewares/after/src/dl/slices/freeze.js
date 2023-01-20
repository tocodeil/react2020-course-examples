import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  frozen: false,
  actions: [],
}

export const slice = createSlice({
  name: 'freeze',
  initialState,
  reducers: {
    setFrozen(state, action) {
      state.frozen = action.payload;
    },
    saveActionForLater(state, action) {
      state.actions.push(action.payload);
    },
    clear(state, _action) {
      state.actions = [];
    },
  },
})

export const actions = slice.actions
export default slice.reducer

