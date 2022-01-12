
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootSlice from "./reducers/rootSlice"
export const store = configureStore({
    reducer: {
      root: rootSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;