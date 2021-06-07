import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

window.idCounter = 5;

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: { ...book, id: window.idCounter },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});
