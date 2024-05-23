import { configureStore } from '@reduxjs/toolkit';
import ShoppingCartSlice from './Shopping-cart-slice';
// Your reducers and middleware setup
const store = configureStore({
  reducer: {
    // Your reducers here
    shoppingCart:ShoppingCartSlice.reducer
  },
  // Optional: Any middleware configuration
});

export default store;