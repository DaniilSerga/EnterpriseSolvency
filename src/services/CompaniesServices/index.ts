import axios from "axios";
import { Company } from "types";

export const fetchCompany = async (id: number) => {
    console.log(id);
    const company = await axios.get<Company>(`https://kursachsergi.azurewebsites.net/api/Companies/${id}`).then(resp => resp.data);
    return company;
};

export const fetchCompanies = async () => {
    const companies = await axios.get<Company[]>('https://kursachsergi.azurewebsites.net/api/Companies').then((resp) => resp.data);
    return companies;
}

export const postCompany = async (name: string) => {
    await axios.post('https://kursachsergi.azurewebsites.net/api/Companies', {name});
}

export const removeCompany = async (id: number) => {
    await axios.delete(`https://kursachsergi.azurewebsites.net/api/Companies?id=${id}`);
}
