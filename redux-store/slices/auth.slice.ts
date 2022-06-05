import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthSliceState {
  isLogin: boolean;
  accessToken: string | null;
}

const authSliceState: AuthSliceState = {
  isLogin: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authSliceState,
  reducers: {
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
  },
});

export const { setIsLogin, setAccessToken } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
