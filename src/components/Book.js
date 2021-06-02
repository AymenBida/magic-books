import PropTypes from 'prop-types';

const Book = ({ bookId, title, category }) => (
  <tr>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);



export default Book;
