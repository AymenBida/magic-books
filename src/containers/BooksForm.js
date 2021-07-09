import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/actions/index';
import './booksForm.scss';

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
    <form className="addForm" onSubmit={handleSubmit}>
      <h2 className="addForm__title">ADD NEW BOOK</h2>
      <div className="addForm__wrapper">
        <input className="addForm__bookTitle" id="title" type="text" value={book.title} onChange={handleChange} placeholder="Book title" />
        <select className="addForm__category" name="category" id="category" value={book.category} onChange={handleChange}>
          {CATEGORIES.map(
            (category) => <option key={category.id} value={category.id}>{category.name}</option>,
          )}
        </select>
        <button className="addForm__submit" type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default BooksForm;
