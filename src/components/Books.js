import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookItem from './BookItem';

const Books = () => {
  const books = useSelector((state) => state.reducer.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <section>
      {books?.map((book) => <BookItem key={book.item_id} book={book} />)}
    </section>
  );
};

export default Books;
