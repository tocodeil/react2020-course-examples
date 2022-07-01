import produce from 'immer';

const initialState = {
    messages: [
      { id: 0, from: 'ynon', text: 'Hello Everyone' },
    ],    
};

export default produce((state, action) => {
  switch(action.type) {
    case 'RECEIVED_MESSAGE':      
      state.messages.push(action.payload);
      break;

    case 'SET_USERNAME':
      state.messages.push({ from: 'SYSTEM', text: `A user has changed its name to: ${action.payload}` });
  }
}, initialState);


