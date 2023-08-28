import React from 'react';
import { useSelector } from 'react-redux';
import BookComponent from './BookComponent';

const BookListComponent = () => {
  const books = useSelector((state) => state.book);
  console.log(books);

  return (
    <div className="book-list">
      <h2>Books</h2>
      {books.map((book) => (
        <BookComponent key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookListComponent;
