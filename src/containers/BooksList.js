import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { CATEGORIES } from './BooksForm';
import { removeBook } from '../redux/actions';

const findCategory = (book) => CATEGORIES.find((cat) => cat.id === book.category).name;

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredBooks = (filter === 'All') ? books : books.filter((book) => findCategory(book) === filter);

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
        {filteredBooks.map(
          (book) => (
            <Book
              key={book.id}
              bookId={book.id}
              title={book.title}
              category={findCategory(book)}
              handleRemoveBook={handleRemoveBook}
            />
          ),
        )}

      </tbody>
    </table>
  );
};

export default BooksList;
