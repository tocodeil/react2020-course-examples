import { createStore, combineReducers, applyMiddleware } from 'redux';
import produce from 'immer';
import messages from './reducers/messages';
import rooms from './reducers/rooms';
import account from './reducers/account';
const firebase = window.firebase;

function nextId(items) {
  return Math.max(...items.map(i => i.id)) + 1;
}


const firebaseMessages = ({dispatch, getState }) => next => action => {
  if (action.type === 'FIREBASE_INIT') {
    firebase.firestore().collection('messages').orderBy('timestamp').onSnapshot(function(qs) {
      const batch = [];
      qs.forEach(function(doc) {
        batch.push({ id: doc.id, ...doc.data()});
      })
      dispatch({ type: 'RESET_MESSAGES', payload: batch });
    });
    return;
  }
  return next(action);
};


const reducer = combineReducers({ messages, rooms, account });

const store = createStore(reducer, applyMiddleware(firebaseMessages));
window.store = store;
export default store;

store.dispatch({ type: 'FIREBASE_INIT' });
