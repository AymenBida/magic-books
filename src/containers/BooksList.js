import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getBooks from '../redux/selectors';
import Book from '../components/Book';
import { CATEGORIES } from './BooksForm';

const BooksList = ({ books }) => {
  const [...theBooks] = books;
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
        {theBooks.map(
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

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const books = getBooks(state);
  return books;
};

export default connect(mapStateToProps)(BooksList);
