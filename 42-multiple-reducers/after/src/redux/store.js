import { createStore, combineReducers } from 'redux';
import produce from 'immer';
import rooms from './reducers/room';
import messages from './reducers/messages';
import account from './reducers/account';

/*
function reducer(state, action) {
  return {
    rooms: roomsReducer(state.rooms, action),
    messages: messagesReducer(state.messages, action),
    account: accountReducer(state.account, action)
  }
}
*/

const reducer = combineReducers({ rooms, messages, account })

const store = createStore(reducer);
window.store = store;
export default store;

