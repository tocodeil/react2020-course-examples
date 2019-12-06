import $ from 'jquery';

export function fetchCharacter(id) {
  return async function(dispatch, getState) {
    if (!getState().people[id]) {
      const data = await $.getJSON(`https://swapi.co/api/people/${id}/`);
      dispatch(receivedCharacter(id, data));
    }
  }
}

export function receivedCharacter(id, data) {
  return { type: 'NEW_PERSON', payload: { id, data } };
}

export function receivedFilm(id, data) {
  return { type: 'NEW_FILM', payload: { id, data } };
}
