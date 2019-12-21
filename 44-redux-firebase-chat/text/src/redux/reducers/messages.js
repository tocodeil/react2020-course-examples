import produce from 'immer';

const initialState = {
    messages: [],    
};

export default produce((state, action) => {
  switch(action.type) {
    case 'RESET_MESSAGES':      
      state.messages = action.payload;
      break;

  }
}, initialState);


