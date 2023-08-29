import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkCategories: () => 'Under construction',
  },
});

export const { checkCategories } = categoriesSlice.actions;
