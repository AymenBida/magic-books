import { CREATE_BOOK } from './actionTypes';
// const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export default createBook;
