import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: `item${state.length + 1}`,
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
