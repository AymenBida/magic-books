import PropTypes from 'prop-types';
import './book.scss';

const Book = ({
  bookId, title, category, handleRemoveBook,
}) => (
  <div className="book">
    <div className="book__leftWrapper">
      <div className="book__category">{category}</div>
      <div className="book__title">{title}</div>
      <div className="book__author">Author</div>
      <div>
        <ul>
          <li className="book__action">Comments</li>
          <li className="book__action"><button className="normalize" type="button" onClick={() => handleRemoveBook(bookId)}>Remove</button></li>
          <li className="book__action">Edit</li>
        </ul>
      </div>
    </div>
    <div className="book__rightWrapper">
      <div className="oval" />
    </div>

  </div>
);

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
