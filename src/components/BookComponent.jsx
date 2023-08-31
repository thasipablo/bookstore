import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookComponent = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>
        <span>Author: </span>
        <span>{book.author}</span>
      </p>
      <p>
        <span>Category: </span>
        <span>{book.category}</span>
      </p>
      <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
        Delete
      </button>
    </div>
  );
};

BookComponent.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookComponent;
