import React, {FC, useEffect, useState} from 'react';

import styles from './ReportsPage.module.scss';
import { AbsoluteLiquidityTable, AssetsCoverageTable, ChooseExistingCompanyInput, CurrentLiquidityTable, ObligationsSolvencyTable } from 'components';
import { Company } from 'types';
import { Typography } from '@mui/material';
import { useAppSelector } from 'hooks';
import {CommonSolvencyTable} from 'components';
import { Link } from 'react-router-dom';

const ReportsPage: FC = () => {
    const [chosenCompany, setChosenCompany] = useState<Company | null>(null);
    const detailedCompany = useAppSelector(state => state.companiesReducer.detailedCompany);

    const setCurrentCompany = (company: Company | null) => {
        setChosenCompany(company);
    };

    useEffect(() => {
        setChosenCompany(null);
    }, []);
    
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <Typography variant='h1' className={styles.heading}><span className={styles.highlightedText}>История</span> расчётов</Typography>
                <ChooseExistingCompanyInput setChosenCompany={setCurrentCompany} isCompanySet={!!chosenCompany} />
                {chosenCompany !== null && detailedCompany && (
                  <>
                    { detailedCompany.commonSolvencyResults!.length !== 0 && <CommonSolvencyTable data={detailedCompany.commonSolvencyResults!} /> }
                    { detailedCompany.obligationsSolvencyResults!.length !== 0 && <ObligationsSolvencyTable data={detailedCompany.obligationsSolvencyResults!} /> }
                    { detailedCompany.absoluteLiquidityResults!.length !== 0 && <AbsoluteLiquidityTable data={detailedCompany.absoluteLiquidityResults!} /> }
                    { detailedCompany.currentLiquidityResults!.length !== 0 && <CurrentLiquidityTable data={detailedCompany?.currentLiquidityResults!} /> }
                    { detailedCompany.assetsCoverageResults!.length !== 0 && <AssetsCoverageTable data={detailedCompany.assetsCoverageResults!} />}
                    { detailedCompany.commonSolvencyResults!.length === 0 && 
                      detailedCompany.obligationsSolvencyResults!.length === 0 &&
                      detailedCompany.absoluteLiquidityResults!.length === 0 &&
                      detailedCompany.currentLiquidityResults!.length === 0 && 
                      detailedCompany.assetsCoverageResults!.length === 0 && (
                        <>
                            <Typography className={styles.primaryText}>Здесь пока ничего нет</Typography>
                            <Typography>Выплоните любые действия на странице <Link to="/calculation" className={styles.highlightedText}>Расчёты</Link></Typography>
                        </>
                      )}
                  </>
                )}
            </div>
        </div>
    );
};

export default ReportsPage;
