import { CREATE_BOOK } from './actionTypes';
// const REMOVE_BOOK = 'REMOVE_BOOK';

window.idCounter = 5;

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: { ...book, id: window.idCounter },
});

export default createBook;
