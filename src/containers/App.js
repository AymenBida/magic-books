import BooksList from '../components/BooksList';
import BooksForm from '../components/BooksForm';
import CategoryFilter from '../components/CategoryFilter';

const App = () => (
  <div>
    <CategoryFilter />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
