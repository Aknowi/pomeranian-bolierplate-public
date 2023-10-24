import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 'Store is working' };

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
});

export default testSlice.reducer;
