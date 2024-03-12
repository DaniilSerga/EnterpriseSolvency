import axios from "axios";

export const fetchSolvencyHistory = async () => {
    const solvencyHistory = await axios.get('https://kursachsergi.azurewebsites.net/api/CommonSolvency').then(resp => {
        return resp.data;
    });

    return solvencyHistory;
};

export const postObligationsSolvency = async (obligations: number, averageMonthlyRevenue: number, calculationResult: number, description: string, companyId: number) => {
    const date = new Date();
    await axios.post('https://kursachsergi.azurewebsites.net/api/ObligationsSolvency', {date, obligations, averageMonthlyRevenue, calculationResult, description, companyId});
};

export const postCurrentLiquidity = async (currentAssets: number, shortTermLiabilities: number, calculationResult: number, description: string, companyId: number) => {
    const date = new Date();
    await axios.post('https://kursachsergi.azurewebsites.net/api/CurrentLiquidity', {date, currentAssets, shortTermLiabilities, calculationResult, description, companyId});
};

export const postAssetsCoverage = async (assets: number, obligations: number, calculationResult: number, description: string, companyId: number) => {
    const date = new Date();
    await axios.post('https://kursachsergi.azurewebsites.net/api/AssetsCoverage', {date, assets, obligations, calculationResult, description, companyId});
};

export const postAbsoluteLiquidity = async (obligations: number, shortTermLiabilities: number, calculationResult: number, description: string, companyId: number) => {
    const date = new Date();
    await axios.post('https://kursachsergi.azurewebsites.net/api/AbsoluteLiquidity', {date, shortTermLiabilities, obligations, calculationResult, description, companyId});
};

export const postSolvency = async (startFunds: number, endFunds: number, spentFunds: number, calculationResult: number, description: string, companyId: number) => {
    const date = new Date();
    await axios.post('https://kursachsergi.azurewebsites.net/api/CommonSolvency', {date, startFunds, endFunds, spentFunds, calculationResult, description, companyId});
};

export const deleteSolvency = async (id: number) => {
    await axios.delete(`https://kursachsergi.azurewebsites.net/api/CommonSolvency?id=${id}`);
};
