import produce from 'immer';

const initialState = {
    messages: [
      { id: 0, from: 'ynon', text: 'Hello Everyone' },
    ],    
};
// type: 'RECEIVED_MESSAGE', payload: { ... }
export default produce((state, action) => {
  switch(action.type) {
    case 'RECEIVED_MESSAGE':      
      state.messages.push(action.payload);
      break;
  }
}, initialState);


