import { createStore, applyMiddleware } from 'redux';
import produce from 'immer';

const initialState = {
  ticks: 0,
};

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'TICK':
      state.ticks += 1;
      break;
  }
}, initialState);

const store = createStore(reducer);
window.store = store;
export default store;

