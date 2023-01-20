# Redux Toolkit

- [ ] Example folder changes

- [ ] What's Redux Boilerplate

- [ ] Add Redux Toolkit to your app

- [ ] Slices In Redux Toolkit

- [ ] Create an Account slice and test it in the browser

- [ ] Create messages and rooms slices



## Slice Template

```
import { createSlice } from '@reduxjs/toolkit'

const initialState = { ... };

export const slice = createSlice({
  name: '...',
  initialState,
  reducers: {
  },
});

export const { ... } = slice.actions
export default slice.reducer;
```


## Store Template

```
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/account'
import messagesReducer from './slices/messages';
import roomsReducer from './slices/rooms';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
  },
})

window.store = store;
```



