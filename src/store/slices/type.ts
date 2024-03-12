import { Company, CommonSolvency } from "types";

export interface ISolvencyState {
    SolvencyHistory: CommonSolvency[];
}

export interface ICompaniesState {
    companies: Company[];
    detailedCompany: Company | null;
}