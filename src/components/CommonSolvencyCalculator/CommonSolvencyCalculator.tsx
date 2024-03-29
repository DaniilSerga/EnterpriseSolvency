import React, {FC, useEffect, useState} from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './CommonSolvencyCalculator.module.scss';
import { useAppDispatch } from 'hooks';
import { CoefficientsEffects } from 'store';

interface Props {
    companyId: number;
}

const CommonSolvencyCalculator: FC<Props> = ({companyId}) => {
    const [startFunds, setStartFunds] = useState<number>(0);
    const [endFunds, setEndFunds] = useState<number>(0);
    const [spentFunds, setSpentFunds] = useState<number>(0);
    const [calculationResult, setCalculationResult] = useState(0);
    const [description, setDescription] = useState('');

    const dispatch = useAppDispatch();

    const getCaclculationDescription = (result: number) => {
        if (result > 1.0) {
            return 'Предприятие является платёжеспособным';
        } else {
            return 'Предприятие не является платёжеспособным';
        }
    };

    const calculateResult = async () => {
        if (!startFunds || !endFunds || !spentFunds) {
            return;
        }

        const result = Math.round((startFunds + endFunds) / spentFunds * 100) / 100.0;
        const calculatedDescription = getCaclculationDescription(result);

        setCalculationResult(result);
        setDescription(calculatedDescription);

        await dispatch(CoefficientsEffects.createSolvency({startFunds, endFunds, spentFunds, calculationResult: result, description: calculatedDescription, companyId}));
    };

    return (
        <Box>
            <Box className={styles.container}>
                <TextField onChange={(event) => setStartFunds(Number(event.target.value))} value={startFunds} label='Денежные средства на начало года (руб.)' />
                <TextField onChange={(event) => setEndFunds(Number(event.target.value))} value={endFunds} label='Денежные средства поступившие за год (руб.)' />
                <TextField onChange={(event) => setSpentFunds(Number(event.target.value))} value={spentFunds} label='Денежные средства израсходованные за год (руб.)' />
                <Button disabled={spentFunds <= 0} className={styles.submitButton} onClick={calculateResult}>Рассчитать</Button>
            </Box>
            <Box>
                <Typography className={styles.resultText} variant='h2'>{calculationResult}</Typography>
                {description && (
                    <Typography className={styles.resultDescription} variant='h2'>{description}</Typography>
                )}
            </Box>
        </Box>
    );
};

export default CommonSolvencyCalculator;
