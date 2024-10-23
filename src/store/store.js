// store.js
import { configureStore } from '@reduxjs/toolkit';

import itemsDataReducer from './itemsDataSlice';

const store = configureStore({
  reducer: {
    itemsData: itemsDataReducer,
  },
});

export default store;
