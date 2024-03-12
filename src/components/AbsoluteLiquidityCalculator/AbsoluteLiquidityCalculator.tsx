import { Box, Button, TextField, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

import styles from './AbsoluteLiquidityCalculator.module.scss';
import { useAppDispatch } from 'hooks';
import { CoefficientsEffects } from 'store';

interface Props {
    companyId: number;
}

const AbsoluteLiquidityCalculator: FC<Props> = ({companyId}) => {
    const [description, setDescription] = useState('');
    const [obligations, setObligations] = useState(0);
    const [shortTermLiabilities, setShortTermLiabilities] = useState(0);
    const [isSubmitDisabled, setSubmitDisabled] = useState(true);
    const [calculationResult, setCalculationResult] = useState(0);
    const dispatch = useAppDispatch();

    const getDescription = (result: number) => {
        return `${result}% краткосрочных обязательств может быть погашено за счёт денежных средств`;
    }

    const calculateResult = async () => {
        const result = Math.round(((obligations / shortTermLiabilities) * 100) * 100) / 100;
        const calculatedDescription = getDescription(result);

        setCalculationResult(result);
        setDescription(calculatedDescription);

        await dispatch(CoefficientsEffects.createAbsoluteLiquidity({obligations, shortTermLiabilities, calculationResult: result, description: calculatedDescription, companyId}))
    };

    useEffect(() => {
        setSubmitDisabled(shortTermLiabilities <= 0);
    }, [shortTermLiabilities]);

    return (
        <Box>
            <Box className={styles.container}>
                <TextField required onChange={(event) => setObligations(Number(event.target.value))} value={obligations} label='Деньги (руб.)' />
                <TextField required onChange={(event) => setShortTermLiabilities(Number(event.target.value))} value={shortTermLiabilities} label='Краткосрочные обязательства (руб.)' />
                <Button disabled={isSubmitDisabled} className={styles.submitButton} onClick={calculateResult}>Рассчитать</Button>
            </Box>
            <Box>
                <Typography className={styles.resultText} variant='h2'>{calculationResult}%</Typography>
                {/* <Typography className={styles.resultDescription} variant='h2'>{description}</Typography> */}
                {description && (
                    <Typography className={styles.resultDescription} variant='h2'>{description}</Typography>
                )}
            </Box>
        </Box>
    );
};

export default AbsoluteLiquidityCalculator;
