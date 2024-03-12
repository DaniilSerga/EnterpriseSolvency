import { Box, Button, TextField, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

import styles from './ObligationsSolvencyCalculator.module.scss';
import { useAppDispatch } from 'hooks';
import { CoefficientsEffects } from 'store';

interface Props {
    companyId: number;
}

const ObligationsSolvencyCalculator: FC<Props> = ({companyId}) => {
    const [description, setDescription] = useState('');
    const [obligations, setObligations] = useState(0);
    const [averageMonthlyRevenue, setAverageMonthlyRevenue] = useState(0);
    const [calculationResult, setCalculationResult] = useState(0);
    const dispatch = useAppDispatch();

    const getDescription = (result: number) => {
        if (result >= 6) {
            return 'У компании достаточный размер выручки, чтобы расплатиться с долгами'
        } else {
            return 'Компании необходимо увеличить выручку или уменьшить долги';
        }
    };

    const calculateResult = async () => {
        const result = obligations / averageMonthlyRevenue;
        const calculatedDescription = getDescription(result);

        setCalculationResult(result);
        setDescription(calculatedDescription);

        await dispatch(CoefficientsEffects.createObligationsSolvency({obligations, averageMonthlyRevenue, calculationResult: result, companyId, description: calculatedDescription}));
    };
    
    return (
        <Box>
            <Box className={styles.container}>
                <TextField required onChange={(event) => setObligations(Number(event.target.value))} value={obligations} label='Все денежные обязательства (руб.)' />
                <TextField required onChange={(event) => setAverageMonthlyRevenue(Number(event.target.value))} value={averageMonthlyRevenue} label='Средняя месячная выручка (руб.)' />
                <Button disabled={averageMonthlyRevenue <= 0} className={styles.submitButton} onClick={calculateResult}>Рассчитать</Button>
            </Box>
            <Box>
                <Typography className={styles.resultText} variant='h2'>{calculationResult}</Typography>
                {/* <Typography className={styles.resultDescription} variant='h2'>{description}</Typography> */}
                {description && (
                    <Typography className={styles.resultDescription} variant='h2'>{description}</Typography>
                )}
            </Box>
        </Box>
    );
};

export default ObligationsSolvencyCalculator;
