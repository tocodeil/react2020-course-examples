import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { inc, dec } from './actions';

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(inc, (state, action) => {
      action.payload
    });
  },
})

export default counterSlice.reducer