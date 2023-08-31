import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const BookFormComponent = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const itemId = uuidv4();
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({ title, author, category, item_id: itemId }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div className="book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <p>
          <button type="submit">Add Book</button>
        </p>
      </form>
    </div>
  );
};

export default BookFormComponent;
