import Book from './Book';

const BooksList = () => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <Book bookId={1} title="The Alchemist" category="Philosophy" />
    </tbody>
  </table>
);

export default BooksList;
