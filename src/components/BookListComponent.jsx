import React from 'react';
import PropTypes from 'prop-types';
import BookComponent from './BookComponent';

const BookListComponent = ({ books, onDelete }) => (
  <div className="book-list">
    <h2>Books</h2>
    {books.map((book) => (
      <BookComponent key={book.id} book={book} onDelete={onDelete} />
    ))}
  </div>
);

BookListComponent.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookListComponent;
