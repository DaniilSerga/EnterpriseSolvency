import axios from "axios";
import {IGetHistoryResponsetype} from './type';

export const fetchSolvencyHistory = async () => {
    console.log('call');
    const solvencyHistory = await axios.get('https://kursachsergi.azurewebsites.net/api/Solvency', {method: 'get', headers: {Accept: 'text/plain'}}).then(resp => {
        console.log(resp);
        return resp.data;
    });

    console.log(solvencyHistory);
    return solvencyHistory;
};

export const postSolvency = async (startFunds: number, endFunds: number, spentFunds: number, calculationResult: number, description: string) => {
    await axios.post('https://kursachsergi.azurewebsites.net/api/Solvency', {startFunds, endFunds, spentFunds, calculationResult, description});
}
