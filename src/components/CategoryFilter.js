import PropTypes, { object } from 'prop-types';

const CategoryFilter = ({ filterChange, filter, allCategories }) => (
  <label htmlFor="filter">
    Filter by Category
    <select name="filter" id="filter" value={filter} onChange={filterChange}>
      {allCategories.map(
        (cat) => <option key={cat.id} value={cat.name}>{cat.name}</option>,
      )}
    </select>
  </label>
);

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  allCategories: PropTypes.arrayOf(typeof object).isRequired,
};

export default CategoryFilter;
