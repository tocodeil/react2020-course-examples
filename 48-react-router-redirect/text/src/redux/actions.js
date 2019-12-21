export function setUsername(username) {
  return { type: 'SET_USERNAME', payload: username };
}

export function saveUsername(history) {
  return function(dispatch, getState) {
    // do something async - for example write to server
    setTimeout(function() {
      // when done - navigate
      history.push('/user');
    }, 1000);
  }
}
