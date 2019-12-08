# Redux & Ajax

1. Starter Code Structure (before ajax)

2. Redux Thunk Middleware:
  - install: npm install --save redux-thunk
  - https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
  
3. Apply thunk middleware to our store

4. Add async action function to fetch the data




























Async action code:

export function fetchCharacter(id) {
  return async function(dispatch, getState) {
    if (!getState().people[id]) {
      const data = await $.getJSON(`https://swapi.co/api/people/${id}/`);
      dispatch(receivedCharacter(id, data));
    }
  }
}



