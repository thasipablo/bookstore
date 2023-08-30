import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const KEY = 'YYwhFWHSLwYTiulPV1gz';
const API_URI = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${KEY}/books`;
// {
//   item_id: 'item1',
//   title: 'The Great Gatsby',
//   author: 'John Smith',
//   category: 'Fiction',
// }

const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios(API_URI);
  const books = await res.data;
  return books;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: `item${state.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const filteredBooks = state.filter(
        (book) => book.item_id !== action.payload,
      );
      return filteredBooks;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
