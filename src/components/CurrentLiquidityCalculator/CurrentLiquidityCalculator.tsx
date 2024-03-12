import { Box, Button, TextField, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

import styles from './CurrentLiquidityCalculator.module.scss';
import { useAppDispatch } from 'hooks';
import { CoefficientsEffects } from 'store';

interface Props {
    companyId: number;
}

const CurrentLiquidityCalculator: FC<Props> = ({companyId}) => {
    const [description, setDescription] = useState('');
    const [currentAssets, setCurrentAssets] = useState(0);
    const [shortTermLiabilities, setShortTermLiabilities] = useState(0);
    const [calculationResult, setCalculationResult] = useState(0);
    const dispatch = useAppDispatch();

    const getDescription = (result: number) => {
        if (result <= 1.5) {
            return 'Активы имеют низкую ликвидность - их придётся долго продавать';
        } else if (result >= 2.5) {
            return 'Активов слишкшом много - они приносят меньше прибыли, чем могут';
        } else {
            return 'Активы имеют нормальную ликвидность';
        }
    }

    const calculateResult = async () => {
        const result = Math.round((currentAssets / shortTermLiabilities) * 100) / 100;
        const calculatedDescription = getDescription(result);

        setCalculationResult(result);
        setDescription(calculatedDescription);

        await dispatch(CoefficientsEffects.createCurrentLiquidity({currentAssets, shortTermLiabilities, calculationResult: result, description: calculatedDescription, companyId}));
    };

    return (
        <Box>
            <Box className={styles.container}>
                <TextField required onChange={(event) => setCurrentAssets(Number(event.target.value))} value={currentAssets} label='Оборотные активы (руб.)' />
                <TextField required onChange={(event) => setShortTermLiabilities(Number(event.target.value))} value={shortTermLiabilities} label='Краткосрочные обязательства (руб.)' />
                <Button disabled={shortTermLiabilities <= 0} className={styles.submitButton} onClick={calculateResult}>Рассчитать</Button>
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

export default CurrentLiquidityCalculator;
