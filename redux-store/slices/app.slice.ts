import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppSliceState {}

const appSliceState: AppSliceState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState: appSliceState,
  reducers: {},
});

// export const { } = appSlice.actions;
export const appSliceReducer = appSlice.reducer;
