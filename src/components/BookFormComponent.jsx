import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookFormComponent = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      onAddBook({ title, author });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

BookFormComponent.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookFormComponent;
