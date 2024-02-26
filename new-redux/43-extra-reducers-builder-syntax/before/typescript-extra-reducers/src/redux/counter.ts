import { createSlice } from '@reduxjs/toolkit'
import { inc, dec } from './actions';

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [inc]: (state, action) => {
      state.value += action.payload;
    },
    // @ts-ignore
    [dec]: (state, action) => {
      state.value -= action.payload;
    }
  }
})

export default counterSlice.reducer