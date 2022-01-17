const AddNewBook = () => (
  <section>
    <h2>ADD NEW BOOK</h2>
    <form action="#">
      <label htmlFor="titel">
        <input
          type="text"
          name="titel"
          id="titel"
          placeholder="Bookt title..."
        />
      </label>
      <label htmlFor="book-category">
        <select name="book-category" id="category">
          <option value="Category" hidden>
            Category
          </option>
          <option value="Category">Action</option>
          <option value="Category">Adventure</option>
        </select>
      </label>
      <button type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default AddNewBook;
