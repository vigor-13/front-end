import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppSliceState {
  isLogin: boolean;
}

const appSliceState: AppSliceState = {
  isLogin: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState: appSliceState,
  reducers: {
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = appSlice.actions;
export const appSliceReducer = appSlice.reducer;
