import { createStore, combineReducers, applyMiddleware } from 'redux';
import produce from 'immer';
import messages from './reducers/messages';
import rooms from './reducers/rooms';
import account from './reducers/account';

const logger = store => next => action => {
  // store: dispatch, getState()
  // next: next middleware in the chain
  // action: the action that was dispatched
  console.log('Action: ', action);
  return next(action);
};


const changeWords = store => next => action => {
  // store: dispatch, getState()
  // next: next middleware in the chain
  // action: the action that was dispatched
  if (action.type === 'RECEIVED_MESSAGE') {
    action.payload.text = action.payload.text.replace(/angular/g, 'react');
  }
  return next(action);
};



function nextId(items) {
  return Math.max(...items.map(i => i.id)) + 1;
}

const reducer = combineReducers({ messages, rooms, account });

const store = createStore(reducer, applyMiddleware(logger, changeWords));
window.store = store;
export default store;

