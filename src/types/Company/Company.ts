import { AbsoluteLiquidity, AssetsCoverage, CommonSolvency, CurrentLiquidity, ObligationsSolvency } from "types/Solvency";

export interface Company {
    id: number,
    name: string;
    absoluteLiquidityResults: AbsoluteLiquidity[] | undefined,
    assetsCoverageResults: AssetsCoverage[] | undefined,
    commonSolvencyResults: CommonSolvency[] | undefined,
    currentLiquidityResults: CurrentLiquidity[] | undefined,
    obligationsSolvencyResults: ObligationsSolvency[] | undefined
}