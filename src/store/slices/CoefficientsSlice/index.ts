import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSolvencyHistory, postSolvency, deleteSolvency, postObligationsSolvency, postAssetsCoverage, postCurrentLiquidity, postAbsoluteLiquidity } from "services";
import { ISolvencyState } from "../type";
import { CommonSolvency } from "types";

const getSolvencyHistory = createAsyncThunk<CommonSolvency[]>('getSolvencyHistory', async () => {
    const solvencyHistory = await fetchSolvencyHistory();
    return solvencyHistory;
});

const createSolvency = createAsyncThunk('createSolvency', async ({startFunds, endFunds, spentFunds, calculationResult, description, companyId}: {startFunds: number, endFunds: number, spentFunds: number, calculationResult: number, description: string, companyId: number}) => {
    await postSolvency(startFunds, endFunds, spentFunds, calculationResult, description, companyId);
});

const createObligationsSolvency = createAsyncThunk('createObligationsSolvency', async ({obligations, averageMonthlyRevenue, calculationResult, description, companyId}: {obligations: number, averageMonthlyRevenue: number, calculationResult: number, description: string, companyId: number}) => {
    await postObligationsSolvency(obligations, averageMonthlyRevenue, calculationResult, description, companyId);
});

const createCurrentLiquidity = createAsyncThunk('createCurrentLiquidity', async ({currentAssets, shortTermLiabilities, calculationResult, description, companyId}: {currentAssets: number, shortTermLiabilities: number, calculationResult: number, description: string, companyId: number}) => {
    await postCurrentLiquidity(currentAssets, shortTermLiabilities, calculationResult, description, companyId);
});

const createAssetsCoverage = createAsyncThunk('createAssetsCoverage', async ({assets, obligations, calculationResult, description, companyId}: {assets: number, obligations: number, calculationResult: number, description: string, companyId: number}) => {
    await postAssetsCoverage(assets, obligations, calculationResult, description, companyId);
});

const createAbsoluteLiquidity = createAsyncThunk('createAssetsCoverage', async ({obligations, shortTermLiabilities, calculationResult, description, companyId}: {obligations: number, shortTermLiabilities: number, calculationResult: number, description: string, companyId: number}) => {
    await postAbsoluteLiquidity(obligations, shortTermLiabilities, calculationResult, description, companyId);
});

const removeSolvency = createAsyncThunk('removeSolvency', async (id: number) => {
    await deleteSolvency(id);
});

const initialState: ISolvencyState = {
    SolvencyHistory: [],
}

const coefficientsSlice = createSlice({
    name: 'CoefficientsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSolvencyHistory.fulfilled, (state, action) => {
            state.SolvencyHistory = action.payload;
        })
    }
})

export const CoefficientsEffects = {
    getSolvencyHistory,
    createSolvency,
    createObligationsSolvency,
    createAbsoluteLiquidity,
    createAssetsCoverage,
    createCurrentLiquidity,
    removeSolvency,
}

const {reducer, actions} = coefficientsSlice;

export const {} = actions;
export default reducer;
