import { Box, Button, TextField, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

import styles from './CurrentLiquidityCalculator.module.scss';

const CurrentLiquidityCalculator: FC = () => {
    const [description, setDescription] = useState('');
    const [currentAssets, setCurrentAssets] = useState(0);
    const [shortTermLiabilities, setShortTermLiabilities] = useState(0);
    const [isSubmitDisabled, setSubmitDisabled] = useState(true);
    const [calculationResult, setCalculationResult] = useState(0);

    const calculateResult = () => {
        setCalculationResult(currentAssets / shortTermLiabilities)
    };

    useEffect(() => {
        setSubmitDisabled(shortTermLiabilities <= 0);
    }, [shortTermLiabilities]);

    return (
        <Box>
            <Box className={styles.container}>
                <TextField required onChange={(event) => setCurrentAssets(Number(event.target.value))} value={currentAssets} label='Оборотные активы (руб.)' />
                <TextField required onChange={(event) => setShortTermLiabilities(Number(event.target.value))} value={shortTermLiabilities} label='Краткосрочные обязательства (руб.)' />
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

export default CurrentLiquidityCalculator;
