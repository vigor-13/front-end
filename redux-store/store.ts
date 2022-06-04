import { configureStore, Reducer } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { rootReducer, SET_CLIENT_STATE } from './slices';

/*
  [NOTE]: next-redux-wrapper - usage with redux persist
  @REF: [https://github.com/kirill-konshin/next-redux-wrapper#usage-with-redux-persist]
 */

const makeConfiguredStore = (reducer: any) => {
  return configureStore({
    reducer: reducer as Reducer,
    /*
      [BUG]: non-serializable value error
      @REF: [https://github.com/rt2zz/redux-persist/issues/988#issuecomment-647508240]
    */
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
    },
    devTools: process.env.NODE_ENV === 'development',
  });
};

export const makeStore = () => {
  const isServer = typeof window === 'undefined';
  let reducer = rootReducer;

  if (isServer) {
    return makeConfiguredStore(reducer);
  } else {
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = makeConfiguredStore(persistedReducer);

    // @ts-ignore
    store.__persistor = persistStore(store);

    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export const setClientState = (clientState: any) => {
  return {
    type: SET_CLIENT_STATE,
    payload: clientState,
  };
};
