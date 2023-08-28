import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookComponent = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>
        Author:
        {book.author}
      </p>
      <button type="button" onClick={() => dispatch(removeBook(book.id))}>
        Delete
      </button>
    </div>
  );
};

BookComponent.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookComponent;
