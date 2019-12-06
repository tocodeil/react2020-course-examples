export function receivedCharacter(id, data) {
  return { type: 'NEW_PERSON', payload: { id, data } };
}

export function receivedFilm(id, data) {
  return { type: 'NEW_FILM', payload: { id, data } };
}
