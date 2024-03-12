import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICompaniesState } from "../type";
import { fetchCompanies, fetchCompany, postCompany, removeCompany } from "services";

const getCompany = createAsyncThunk('getCompany', async (id: number) => {
    const company = fetchCompany(id);
    return company;
});

const getCompanies = createAsyncThunk('getCompanies', async () => {
    const companies = await fetchCompanies();
    return companies;
});

const createCompany = createAsyncThunk('createCompany', async (name: string) => {
    await postCompany(name);
});

const deleteCompany = createAsyncThunk('deleteCompany', async (id: number) => {
    await removeCompany(id);
});

const initialState: ICompaniesState = {
    companies: [],
    detailedCompany: null,
}

const companiesSlice = createSlice({
    name: 'companiesSlice',
    initialState,
    reducers: {
        reset: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCompanies.fulfilled, (state, action) => {
            state.companies = action.payload;
        });
        builder.addCase(getCompany.fulfilled, (state, actions) => {
            state.detailedCompany = actions.payload;
        })
    }
})

const {reducer, actions} = companiesSlice;

export const CompaniesEffects = {
    createCompany,
    getCompany,
    getCompanies,
    deleteCompany,
};

export const {reset} = actions;
export default reducer;