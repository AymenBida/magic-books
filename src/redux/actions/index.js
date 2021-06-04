import { CREATE_BOOK } from './actionTypes';

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export default createBook;
