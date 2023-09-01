import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookComponent = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="left">
        <div className="category">{book.category}</div>
        <h3 className="title">{book.title}</h3>
        <div className="author">{book.author}</div>
        <div className="action-btns">
          <button type="button">Comments</button>
          <div className="vertical-separator" />
          <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
            Remove
          </button>
          <div className="vertical-separator" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="right">
        <div className="progress">
          <div className="progress-chart">chart</div>
          <div className="progress-pourcentage">
            <div>65%</div>
            <div>In progress</div>
          </div>
        </div>
        <div className="infs">
          <div className="current-chapter">CUURENT CHAPTER</div>
          <div className="current-chapter">Chapter 17</div>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
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
