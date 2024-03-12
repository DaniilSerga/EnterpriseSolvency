export interface CommonSolvency {
    id: number;
    startFunds: number;
    endFunds: number;
    spentFunds: number;
    calculationResult: number;
    date: string;
    description: string;
}

export interface AbsoluteLiquidity {
    id: number;
    obligations: number,
    shortTermLiabilities: number,
    calculationResult: number,
    description: string,
    date: string,
    companyId: number,
}

export interface AssetsCoverage {
    id: number;
    assets: number;
    obligations: number;
    calculationResult: number,
    description: string,
    date: string,
    companyId: number,
}

export interface CurrentLiquidity {
    id: number;
    currentAssets: number,
    shortTermLiabilities: number,
    calculationResult: number,
    description: string,
    date: string,
    companyId: number,
}

export interface ObligationsSolvency {
    id: number;
    obligations: number,
    averageMonthlyRevenue: number,
    calculationResult: number,
    description: string,
    date: string,
    companyId: number,
}