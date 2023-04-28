import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { gameSlice } from './slices/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;