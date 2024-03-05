import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSolvencyHistory, postSolvency, deleteSolvency } from "services";
import { ISolvencyState } from "./type";
import { Solvency } from "types";

const getSolvencyHistory = createAsyncThunk<Solvency[]>('getSolvencyHistory', async () => {
    const solvencyHistory = await fetchSolvencyHistory();
    return solvencyHistory;
});

const createSolvency = createAsyncThunk('createSolvency', async ({startFunds, endFunds, spentFunds, calculationResult, description}: {startFunds: number, endFunds: number, spentFunds: number, calculationResult: number, description: string}) => {
    await postSolvency(startFunds, endFunds, spentFunds, calculationResult, description);
});

const removeSolvency = createAsyncThunk('removeSolvency', async (id: number) => {
    await deleteSolvency(id);
})

const initialState: ISolvencyState = {
    SolvencyHistory: [],
}

const solvencySlice = createSlice({
    name: 'SolvencySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSolvencyHistory.fulfilled, (state, action) => {
            state.SolvencyHistory = action.payload;
        })
    }
})

export const SolvencyEffects = {
    getSolvencyHistory,
    createSolvency,
    removeSolvency,
}

const {reducer, actions} = solvencySlice;

export const {} = actions;
export default reducer;
