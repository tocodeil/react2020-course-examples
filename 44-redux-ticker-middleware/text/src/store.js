import { createStore, applyMiddleware } from 'redux';
import produce from 'immer';

const initialState = {
  ticks: 0,
};

const ticker = ({ dispatch, getState }) => next => action => {
  let timer = null;

  if (action.type === 'TICK_START') {
    clearInterval(timer);
    timer = setInterval(function() {
      dispatch({ type: 'TICK' });
    }, 1000);
  } else if (action.type === 'TICK_STOP') {
    clearInterval(timer);
  }

  return next(action);
};

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'TICK':
      state.ticks += 1;
      break;
  }
}, initialState);

const store = createStore(reducer, applyMiddleware(ticker));
store.dispatch({ type: 'TICK_START' });
window.store = store;
export default store;

