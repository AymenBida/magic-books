import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CategoryFilter from './CategoryFilter';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar__item brand">Magic Books</h1>
    <h2 className="navbar__item fakeLink">BOOKS</h2>
    <CategoryFilter />
    <span className="iconWrapper">
      <FontAwesomeIcon icon={faUser} className="icon" size="17x" />
    </span>
  </nav>
);

export default Navbar;
