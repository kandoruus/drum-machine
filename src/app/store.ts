import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reducer } from './reducer';


export const store: Store<string, UpdateDisplayAction> & {
  dispatch: DispatchType
} = configureStore({reducer, middleware: [thunk]});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
