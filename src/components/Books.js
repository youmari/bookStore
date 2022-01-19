/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookItem from './BookItem';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [getBooks, useSelector]);
  const books = useSelector((state) => state.reducer.books);
  const allBooks = Object.values(books);

  return (
    <section>
      {allBooks?.map((book) => book?.map((item, index) => <BookItem key={Object.keys(books)[index]} book={item} />))}
    </section>
  );
};

export default Books;
