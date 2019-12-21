import { createStore, combineReducers } from 'redux';
import produce from 'immer';
import messages from './reducers/messages';
import rooms from './reducers/rooms';
import account from './reducers/account';

function nextId(items) {
  return Math.max(...items.map(i => i.id)) + 1;
}

const reducer = combineReducers({ messages, rooms, account });

const store = createStore(reducer);
window.store = store;
export default store;

