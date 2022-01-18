import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book: { title, author, id } }) => {
  const dispatch = useDispatch();
  return (
    <article className="book-item">
      <div className="book-info-container">
        <p>Action</p>
        <h2 className="book-title">{title}</h2>
        <h4 className="book-author">{author}</h4>
        <div className="book-functions">
          <button type="button">Comments</button>
          <button onClick={() => dispatch(removeBook({ id }))} type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="current-chapter">
        <h4>CURRENT CHAPTER</h4>
        <h5>chapter 17</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </article>
  );
};

BookItem.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

BookItem.defaultProps = {
  title: '',
  author: '',
  id: '',
};

export default BookItem;
