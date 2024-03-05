import axios from "axios";

export const fetchSolvencyHistory = async () => {
    console.log('call');
    const solvencyHistory = await axios.get('https://kursachsergi.azurewebsites.net/api/Solvency', {method: 'get', headers: {Accept: 'text/plain'}}).then(resp => {
        return resp.data;
    });

    return solvencyHistory;
};

export const postSolvency = async (startFunds: number, endFunds: number, spentFunds: number, calculationResult: number, description: string) => {
    await axios.post('https://kursachsergi.azurewebsites.net/api/Solvency', {startFunds, endFunds, spentFunds, calculationResult, description});
}

export const deleteSolvency = async (id: number) => {
    await axios.delete(`https://kursachsergi.azurewebsites.net/api/Solvency?id=${id}`);
}
