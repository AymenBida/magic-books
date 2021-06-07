import PropTypes from 'prop-types';
import './book.scss';

const Book = ({
  bookId, title, category, handleRemoveBook,
}) => (
  <div className="book">
    <div>{bookId}</div>
    <div>{title}</div>
    <div>{category}</div>
    <div><button type="button" onClick={() => handleRemoveBook(bookId)}>Delete Book</button></div>
  </div>
);

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
