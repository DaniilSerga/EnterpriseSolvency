import { configureStore } from '@reduxjs/toolkit';
import solvencyReducer from './slices/CoefficientsSlice';
import companiesReducer from './slices/CompaniesSlice';

export const store = configureStore({
    reducer: {
        solvencyReducer,
        companiesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;