import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORIES } from '../containers/BooksForm';
import { changeFilter } from '../redux/actions';

const allCategories = [{ name: 'All', id: '0' }, ...CATEGORIES];

const CategoryFilter = () => {
  const [category, setCategory] = useState('0');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const categoryName = allCategories.find((cat) => cat.id === event.target.value).name;
    setCategory(event.target.value);
    dispatch(changeFilter(categoryName));
  };

  return (
    <label htmlFor="filter">
      Filter by Category
      <select name="filter" id="filter" value={category} onChange={handleChange}>
        {allCategories.map(
          (cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>,
        )}
      </select>
    </label>
  );
};

export default CategoryFilter;
