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

export const { setUserName } = accountSlice.actions
export default accountSlice.reducer
