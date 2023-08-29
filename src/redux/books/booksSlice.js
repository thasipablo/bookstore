import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.length > 0 ? state.length + 1 : 1,
        title: action.payload.title,
        author: action.payload.author,
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
