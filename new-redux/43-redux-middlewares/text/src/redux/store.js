import { createStore, combineReducers, applyMiddleware } from 'redux';
import produce from 'immer';
import messages from './reducers/messages';
import rooms from './reducers/rooms';
import account from './reducers/account';

const loggerMiddleware = store => next => action => {
  console.log('ACTION: ', action);
  return next(action);
};

const angularToReact = store => next => action => {
  if (action.type === 'RECEIVED_MESSAGE') {
    action.payload.text = action.payload.text.replace(/angular/g, 'react');
  }
  return next(action);
};

function nextId(items) {
  return Math.max(...items.map(i => i.id)) + 1;
}

const reducer = combineReducers({ messages, rooms, account });

const store = createStore(reducer, applyMiddleware(loggerMiddleware, angularToReact));
window.store = store;
export default store;

