import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const Books = () => {
  const books = useSelector((state) => state.reducer);
  return (
    <section>
      {books?.map((book) => <BookItem key={book.id} book={book} />)}
    </section>
  );
};

export default Books;
