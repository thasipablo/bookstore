import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './books/booksSlice';
import { categoriesSlice } from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: booksSlice.reducer,
    category: categoriesSlice.reducer,
  },
});

export default store;
