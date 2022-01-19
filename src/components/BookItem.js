/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book: { title, category, item_id } }) => {
  const dispatch = useDispatch();
  const handleOnDelete = () => {
    dispatch(removeBook({ item_id }));
  };
  return (
    <article className="book-item">
      <div className="book-info-container">
        <p>Action</p>
        <h2 className="book-title">{title}</h2>
        <h4 className="book-author">{category}</h4>
        <div className="book-functions">
          <button type="button">Comments</button>
          <button
            onClick={() => handleOnDelete()}
            type="button"
          >
            Remove
          </button>
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
  category: PropTypes.string,
  item_id: PropTypes.string,
};

BookItem.defaultProps = {
  title: '',
  category: '',
  item_id: '',
};

export default BookItem;
