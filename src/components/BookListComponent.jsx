import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookComponent from './BookComponent';
import { fetchBooks } from '../redux/books/booksSlice';

const BookListComponent = () => {
  const dispatch = useDispatch();
  const booksStore = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-list">
      <h2>Books</h2>
      {booksStore.books.map((book) => (
        <BookComponent key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookListComponent;
