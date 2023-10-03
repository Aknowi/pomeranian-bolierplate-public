import { configureStore } from '@reduxjs/toolkit';
import testSlice from './features/testSlice';
import counterSlice from './features/counterSlice';

export const store = configureStore({
  reducer: {
    test: testSlice,

    counter: counterSlice,
  },
});
