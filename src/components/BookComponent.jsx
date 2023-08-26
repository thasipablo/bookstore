import React from 'react';
import PropTypes from 'prop-types';

const BookComponent = ({ book, onDelete }) => (
  <div className="book">
    <h3>{book.title}</h3>
    <p>
      Author:
      {book.author}
    </p>
    <button type="button" onClick={() => onDelete(book.id)}>
      Delete
    </button>
  </div>
);

BookComponent.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookComponent;
