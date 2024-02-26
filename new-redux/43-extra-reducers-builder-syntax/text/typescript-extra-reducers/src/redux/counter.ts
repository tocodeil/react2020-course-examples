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
      state.value += action.payload;
    });
    builder.addCase(dec, (state, action) => {
      state.value -= action.payload;
    });
    builder.addMatcher(isAnyOf(inc, dec), (_state, _action) => {
      console.log(`Value changed`);
    })
  }
})

export default counterSlice.reducer