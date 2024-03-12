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
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();

    const getDescription = (result: number) => {
        return `${result}% обязательств можно погасить за счёт имеющихся денежных средств и продажи материальных активов`;
    };

    const calculateResult = async () => {
        const result = Math.round((assets / obligations) * 100);
        const calculatedDescription = getDescription(result);

        setCalculationResult(result);
        setDescription(calculatedDescription);

        await dispatch(CoefficientsEffects.createAssetsCoverage({assets, obligations, calculationResult: result, description: calculatedDescription, companyId}));
    };

    return (
        <Box>
            <Box className={styles.container}>
                <TextField required onChange={(event) => setAssets(Number(event.target.value))} value={assets} label='Все активы (руб.)' />
                <TextField required onChange={(event) => setObligations(Number(event.target.value))} value={obligations} label='Все обязательства (руб.)' />
                <Button disabled={obligations <= 0} className={styles.submitButton} onClick={calculateResult}>Рассчитать</Button>
            </Box>
            <Box>
                <Typography className={styles.resultText} variant='h2'>{calculationResult}%</Typography>
                {description && (
                    <Typography className={styles.resultDescription} variant='h2'>{description}</Typography>
                )}
            </Box>
        </Box>
    );
};

export default AssetsCoverageCalculator;
