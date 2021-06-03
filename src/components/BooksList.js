import { useSelector } from 'react-redux';
import Book from './Book';
import { CATEGORIES } from './BooksForm';

const BooksList = () => {
  const books = useSelector(((state) => state.books));

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(
          (book) => (
            <Book
              key={book.id}
              bookId={book.id}
              title={book.title}
              category={CATEGORIES.find((cat) => cat.id === book.category).name}
            />
          ),
        )}

      </tbody>
    </table>
  );
};

export default BooksList;
