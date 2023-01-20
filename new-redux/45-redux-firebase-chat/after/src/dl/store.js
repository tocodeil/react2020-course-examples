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
