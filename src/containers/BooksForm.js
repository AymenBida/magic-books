import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/actions/index';

export const CATEGORIES = [
  { name: 'Action', id: '1' },
  { name: 'Biography', id: '2' },
  { name: 'History', id: '3' },
  { name: 'Horror', id: '4' },
  { name: 'Kids', id: '5' },
  { name: 'Learning', id: '6' },
  { name: 'Sci-Fi', id: '7' },
];

const BooksForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', category: '1' });

  const handleChange = (event) => {
    setBook({ ...book, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBook(book));
    setBook({ title: '', category: book.category });
    window.idCounter += 1;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          Title
          <input id="title" type="text" value={book.title} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label htmlFor="category">
          Category
          <select name="category" id="category" value={book.category} onChange={handleChange}>
            {CATEGORIES.map(
              (category) => <option key={category.id} value={category.id}>{category.name}</option>,
            )}
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BooksForm;
