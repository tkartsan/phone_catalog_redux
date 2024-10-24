// store.js
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice'; // Import cart slice
import compareReducer from './compareSlice';
import favoritesReducer from './favoritesSlice'; // Import favorites slice
import itemsDataReducer from './itemsDataSlice';

const store = configureStore({
  reducer: {
    itemsData: itemsDataReducer,
    compare: compareReducer,
    cart: cartReducer, // Add cart reducer
    favorites: favoritesReducer, // Add favorites reducer
  },
});

export default store;
