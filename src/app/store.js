import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Cart/cartSlice';
import photoReducer from '../features/Photo/photoSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
  photos: photoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
