import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      title: 'title',
      author: 'author',
      id: '1',
    },
  ],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.length > 0 ? state.length + 1 : 1,
        title: action.title,
        author: action.author,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const filteredBooks = state.filter((book) => book.id !== action.payload);
      return filteredBooks;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
