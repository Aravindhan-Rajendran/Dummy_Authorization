import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;