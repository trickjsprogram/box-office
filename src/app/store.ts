import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import favReducer from "../features/favMovieSlice";

export const store = configureStore({
  reducer: {
    favorites: favReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
