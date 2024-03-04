import React, {FC, useEffect, useState} from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './Calculator.module.scss';
import { useAppDispatch } from 'hooks';
import { SolvencyEffects } from 'store';

const Calculator: FC = () => {
    const [startFunds, setStartFunds] = useState<number>();
    const [endFunds, setEndFunds] = useState<number>(0);
    const [spentFunds, setSpentFunds] = useState<number>(0);
    const [calculationResult, setCalculationResult] = useState(0);
    const [description, setDescription] = useState<string>('Предприятие является платёжеспособным');
    const [isSubmitDisabled, setSubmitDisabled] = useState(false);

    const dispatch = useAppDispatch();

    const getCaclculationDescription = () => {
        if (calculationResult > 1.0) {
            setDescription('Предприятие является платёжеспособным')
        } else {
            setDescription('Предприятие не является платёжеспособным')
        }
    };

    const calculateResult = async () => {
        if (!startFunds || !endFunds || !spentFunds) {
            return;
        }

        const result = Math.round((startFunds + endFunds) / spentFunds * 100) / 100.0;

        setCalculationResult(result);
        getCaclculationDescription();

        await dispatch(SolvencyEffects.createSolvency({startFunds, endFunds, spentFunds, calculationResult, description}));
    };

    useEffect(() => {
        if (spentFunds === 0) {
            setSubmitDisabled(true);
        } else {
            setSubmitDisabled(false);
        }
    }, [spentFunds]);

    return (
        <Box>
            <Box className={styles.container}>
                <TextField type='number' onChange={(event) => setStartFunds(Number(event.target.value))} value={startFunds} label='Денежные средства на начало года (руб.)' />
                <TextField type='number' onChange={(event) => setEndFunds(Number(event.target.value))} value={endFunds} label='Денежные средства поступившие за год (руб.)' />
                <TextField type='number' onChange={(event) => setSpentFunds(Number(event.target.value))} value={spentFunds} label='Денежные средства израсходованные за год (руб.)' />
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

export default Calculator;
