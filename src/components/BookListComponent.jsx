import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookComponent from './BookComponent';
import { fetchBooks } from '../redux/books/booksSlice';

const BookListComponent = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.book);
  const keys = Object.keys(bookStore.books);
  let books = [];
  // build books array from bookStore object
  keys.forEach((key) => {
    books = [...books, { ...bookStore.books[key][0], item_id: key }];
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-list">
      <h2>Books</h2>
      {books.map((book) => (
        <BookComponent key={book.title} book={book} />
      ))}
    </div>
  );
};

export default BookListComponent;
