import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { appSliceReducer, AppSliceState } from './app.slice';

export const SET_CLIENT_STATE = 'SET_CLIENT_STATE';

export interface RootState {
  app: AppSliceState;
}

export const rootReducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CLIENT_STATE:
      return {
        ...state,
        fromClient: action.payload,
      };
    default: {
      const combinedReducer = combineReducers({
        app: appSliceReducer,
      });

      return combinedReducer(state, action);
    }
  }
};
