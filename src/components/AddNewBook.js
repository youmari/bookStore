import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddNewBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  // const [bookCategory, setBookCategory] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const submitNewBook = (e) => {
    e.preventDefault();
    if (bookAuthor === '' || bookTitle === '') return;
    dispatch(addBook({
      title: bookTitle, category: bookAuthor, item_id: uuidv4(),
    }));
    setIsSubmit(true);
    setBookAuthor('');
    setBookTitle('');
  };
  return (
    <section>
      {isSubmit && <h1>Book added successfully</h1>}
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">
          <input
            className="title-input"
            type="text"
            name="title"
            id="title"
            value={bookTitle}
            placeholder="Bookt title..."
            maxLength={50}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </label>
        <label htmlFor="author">
          <input
            className="author-input"
            type="text"
            name="author"
            id="author"
            value={bookAuthor}
            placeholder="Author..."
            maxLength={50}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
        </label>
        <label htmlFor="book-category">
          <select className="book-category" name="book-category" id="category">
            <option value="Category" hidden>
              Category
            </option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
          </select>
        </label>
        <button className="add-book-btn" type="submit" onClick={submitNewBook}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddNewBook;
