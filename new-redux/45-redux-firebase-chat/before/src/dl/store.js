import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/account'
import messagesReducer from './slices/messages';
import roomsReducer from './slices/rooms';
import freezeReducer from './slices/freeze';
import * as freezeActions from './slices/freeze';

const freezeMiddleware = ({ dispatch, getState }) => next => action => {
  const frozen = getState().freeze.frozen;

  if (frozen && !action.type.startsWith('freeze/')) {
    return dispatch(freezeActions.addPending(action));
  }

  if (frozen && action.type == freezeActions.freeze && !action.payload) {
    next(action);
    for (let act of getState().freeze.pendingActions) {
      dispatch(act);
    }
    dispatch(freezeActions.clearPending());
    return;
  }

  return next(action);
};

export const store = configureStore({
  reducer: {
    account: accountReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
    freeze: freezeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(freezeMiddleware),
})

window.store = store;
