import { Box, Button, TextField, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

import styles from './ObligationsSolvencyCalculator.module.scss';

const ObligationsSolvencyCalculator: FC = () => {
    const [description, setDescription] = useState('');
    const [obligations, setObligations] = useState(0);
    const [averageMonthlyRevenue, setAverageMonthlyRevenue] = useState(0);
    const [isSubmitDisabled, setSubmitDisabled] = useState(true);
    const [calculationResult, setCalculationResult] = useState(0);

    const calculateResult = () => {
        setCalculationResult(obligations / averageMonthlyRevenue);
    };

    useEffect(() => {
        setSubmitDisabled(averageMonthlyRevenue <= 0);
    }, [averageMonthlyRevenue]);
    
    return (
        <Box>
            <Box className={styles.container}>
                <TextField required onChange={(event) => setObligations(Number(event.target.value))} value={obligations} label='Все денежные обязательства (руб.)' />
                <TextField required onChange={(event) => setAverageMonthlyRevenue(Number(event.target.value))} value={averageMonthlyRevenue} label='Средняя месячная выручка (руб.)' />
                <Button disabled={isSubmitDisabled} className={styles.submitButton} onClick={calculateResult}>Рассчитать</Button>
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
