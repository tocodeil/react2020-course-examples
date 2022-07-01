import produce from 'immer';

const initialState = {
    messages: [],    
};

export default produce((state, action) => {
  console.log(action);
  switch(action.type) {
    case 'NEW_MESSAGE':      
      state.messages.push(action.payload);
      break;

    case 'RESET_MESSAGES':
      state.messages = action.payload;
  }
}, initialState);


