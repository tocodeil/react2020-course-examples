import { createStore, applyMiddleware } from 'redux';
import produce from 'immer';

const initialState = {
  username: '',
};

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'SET_USERNAME':
      state.username = action.payload;
  }
}, initialState);

export default createStore(reducer);
