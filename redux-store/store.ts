import { CombinedState, configureStore, Reducer } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from './slices';

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer as Reducer,
    devTools: process.env.NODE_ENV === 'development',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
