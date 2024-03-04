import { configureStore } from '@reduxjs/toolkit';
import solvencyReducer from './slices/SolvencySlice';

export const store = configureStore({
    reducer: solvencyReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;