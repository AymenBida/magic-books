import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';
import './app.scss';

const App = () => (
  <div className="rootContainer">
    <Navbar />
    <div className="booksContainer">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);

export default App;
