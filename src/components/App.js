import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';
import './app.scss';

const App = () => (
  <div className="rootContainer">
    <Navbar />
    <div className="appContainer">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);

export default App;
