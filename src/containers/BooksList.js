import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { CATEGORIES } from './BooksForm';
import { removeBook } from '../redux/actions';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
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
              handleRemoveBook={handleRemoveBook}
            />
          ),
        )}
      </tbody>
    </table>
  );
};

export default BooksList;
