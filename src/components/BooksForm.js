import { useState } from 'react';

export const CATEGORIES = [
  { name: 'Action', id: 1 },
  { name: 'Biography', id: 2 },
  { name: 'History', id: 3 },
  { name: 'Horror', id: 4 },
  { name: 'Kids', id: 5 },
  { name: 'Learning', id: 6 },
  { name: 'Sci-Fi', id: 7 },
];

const BooksForm = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('1');

  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleCategory = (event) => {
    setBookCategory(event.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="title">
          Title
          <input id="title" type="text" value={bookTitle} onChange={handleChange} />
        </label>
        {console.log(bookCategory)}
      </div>
      <div>
        <label htmlFor="category">
          Category
          <select name="category" id="category" value={bookCategory} onChange={handleCategory}>
            {CATEGORIES.map(
              (category) => <option key={category.id} value={category.id}>{category.name}</option>,
            )}
          </select>
        </label>
      </div>
      <div>
        <button type="button">Submit</button>
      </div>

    </form>
  );
};

export default BooksForm;
