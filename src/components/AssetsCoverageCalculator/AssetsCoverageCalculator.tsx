import { Box, Button, TextField, Typography } from '@mui/material';
import React, {FC, useState} from 'react';

import styles from './AssetsCoverageCalculator.module.scss';
import { useAppDispatch } from 'hooks';
import { CoefficientsEffects } from 'store';

interface Props {
    companyId: number;
}

const AssetsCoverageCalculator: FC<Props> = ({companyId}) => {
    const [assets, setAssets] = useState(0);
    const [obligations, setObligations] = useState(0);
    const [calculationResult, setCalculationResult] = useState(0);
    const dispatch = useAppDispatch();

    const calculateResult = async () => {
        const result = assets / obligations;
        setCalculationResult(result);
        await dispatch(CoefficientsEffects.createAssetsCoverage({assets, obligations, calculationResult: result, description: '', companyId}));
    };

    return (
        <Box>
            <Box className={styles.container}>
                <TextField required onChange={(event) => setAssets(Number(event.target.value))} value={assets} label='Все активы (руб.)' />
                <TextField required onChange={(event) => setObligations(Number(event.target.value))} value={obligations} label='Все обязательства (руб.)' />
                <Button disabled={obligations <= 0} className={styles.submitButton} onClick={calculateResult}>Рассчитать</Button>
            </Box>
            <Box>
                <Typography className={styles.resultText} variant='h2'>{calculationResult}</Typography>
            </Box>
        </Box>
    );
};

export default AssetsCoverageCalculator;
