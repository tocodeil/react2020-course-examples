import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/account'
import messagesReducer from './slices/messages';
import roomsReducer from './slices/rooms';
import freezeReducer, { actions as freezeActions } from './slices/freeze';

const reduxMiddlewareDemo = store => next => action => {
  const { dispatch } = store;

  if (action.type === 'freeze/setFrozen') {
    if (action.payload === true) {
      return next(action);
    } else {
      const pendingActions = store.getState().freeze.actions;
      next(action);
      for (let action of pendingActions) {
        dispatch(action);
      }
      dispatch(freezeActions.clear())
    }
  } else if (
    (action.type === 'freeze/saveActionForLater') ||
    (action.type === 'freeze/clear')) {
    return next(action);
  } else {
    if (store.getState().freeze.frozen) {
      dispatch(freezeActions.saveActionForLater(action));
    } else {
      return next(action);
    }
  }
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(reduxMiddlewareDemo),
  reducer: {
    account: accountReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
    freeze: freezeReducer,
  },
})

window.store = store;
