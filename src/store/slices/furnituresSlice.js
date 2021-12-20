import { createSlice, isFulfilled } from '@reduxjs/toolkit';
import { isPendingAction } from '../../utils/helper';

// Slice
export const furnituresSlice = createSlice({
  name: 'furnitures',
  initialState: {
    furnitures: [],
    furnitureTypes: [],
    success: false,
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isPendingAction('furnitures/get'), (state, action) => {
      state.loading = true;
    }),
      builder.addMatcher(isFulfilled, (state, action) => {
        state.loading = false;
        Object.keys(action?.payload || {}).forEach((key) => {
          state[key] = action.payload[key];
        });
      });
  }
});

export default furnituresSlice.reducer;
