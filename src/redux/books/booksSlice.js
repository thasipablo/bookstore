import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
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
      state = state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
