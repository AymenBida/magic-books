const categories = [
  { name: 'Action', id: 1 },
  { name: 'Biography', id: 2 },
  { name: 'History', id: 3 },
  { name: 'Horror', id: 4 },
  { name: 'Kids', id: 5 },
  { name: 'Learning', id: 6 },
  { name: 'Sci-Fi', id: 7 },
];

const BooksForm = () => (
  <form>
    <div>
      <label htmlFor="title">
        Title
        <input id="title" type="text" />
      </label>

    </div>
    <div>
      <label htmlFor="category">
        Category
        <select name="category" id="category">
          {categories.map(
            (category) => <option key={category.id} value={category.id}>{category.name}</option>,
          )}
        </select>
      </label>
    </div>
    <div>
      <button type="button">Submit</button>
    </div>

  </form>
);

export default BooksForm;
