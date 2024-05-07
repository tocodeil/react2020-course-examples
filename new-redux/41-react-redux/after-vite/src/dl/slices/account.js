import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'guest',
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.name = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserName } = accountSlice.actions
export const actions = accountSlice.actions

export default accountSlice.reducer

window.slice = accountSlice;
