import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pendingActions: [],
  frozen: false,
}

export const slice = createSlice({
  name: 'freeze',
  initialState,
  reducers: {
    freeze(state, action) {
      state.frozen = action.payload;
    },

    clearPending(state) {
      state.pendingActions = [];
    },

    addPending(state, action) {
      state.pendingActions.push(action.payload);
    }
  },
})

export const { freeze, clearPending, addPending } = slice.actions
export default slice.reducer
