import React, {FC, useState} from 'react';

import styles from './ReportsPage.module.scss';
import { AbsoluteLiquidityTable, AssetsCoverageTable, ChooseExistingCompanyInput, CurrentLiquidityTable, ObligationsSolvencyTable } from 'components';
import { Company } from 'types';
import { Typography } from '@mui/material';
import { useAppSelector } from 'hooks';
import {CommonSolvencyTable} from 'components';

const ReportsPage: FC = () => {
    const [chosenCompany, setChosenCompany] = useState<Company | null>(null);
    const detailedCompany = useAppSelector(state => state.companiesReducer.detailedCompany);

    const setCurrentCompany = (company: Company | null) => {
        setChosenCompany(company);
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <Typography variant='h1' className={styles.heading}><span className={styles.highlightedText}>История</span> расчётов</Typography>
                <ChooseExistingCompanyInput setChosenCompany={setCurrentCompany} isCompanySet={!!chosenCompany} />
                {detailedCompany && (
                  <>
                    <CommonSolvencyTable data={detailedCompany.commonSolvencyResults!} />
                    <ObligationsSolvencyTable data={detailedCompany.obligationsSolvencyResults!} />
                    <AbsoluteLiquidityTable data={detailedCompany.absoluteLiquidityResults!} />
                    <CurrentLiquidityTable data={detailedCompany?.currentLiquidityResults!} />
                    <AssetsCoverageTable data={detailedCompany.assetsCoverageResults!} />
                  </>
                )}
            </div>
        </div>
    );
};

export default ReportsPage;
