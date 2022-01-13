
import { configureStore } from '@reduxjs/toolkit';
import rootSlice from "./reducers/rootSlice"
export const store = configureStore({
    reducer: {
      root: rootSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
