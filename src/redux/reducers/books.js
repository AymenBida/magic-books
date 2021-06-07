import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const initialState = [
  {
    title: 'The Alchemist',
    id: 1,
    category: '2',
  },
  {
    title: 'Superman',
    id: 2,
    category: '1',
  },
  {
    title: 'Barney',
    id: 3,
    category: '5',
  },
  {
    title: 'Alien',
    id: 4,
    category: '7',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
