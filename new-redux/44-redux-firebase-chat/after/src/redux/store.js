import { createStore, combineReducers, applyMiddleware } from 'redux';
import produce from 'immer';
import messages from './reducers/messages';
import rooms from './reducers/rooms';
import account from './reducers/account';

const firebaseMessages = ({dispatch, getState }) => next => action => {
  // Code that runs for every new action
  if (action.type === 'FIREBASE_INIT') {

// Read From Firebase
    firebase.firestore().collection('messages').orderBy('created_at').
      onSnapshot(function(qs) {
        const batch = [];
        qs.forEach(function(doc) {
          batch.push({ id: doc.id, ...doc.data()});
        });
        /// we have the new messages in batch
        dispatch({ type: 'RESET_MESSAGES', payload: batch });
    });
    return ;
  }

  return next(action);

}


function nextId(items) {
  return Math.max(...items.map(i => i.id)) + 1;
}

const reducer = combineReducers({ messages, rooms, account });

const store = createStore(reducer, applyMiddleware(firebaseMessages));
store.dispatch({ type: 'FIREBASE_INIT' });

window.store = store;
export default store;

