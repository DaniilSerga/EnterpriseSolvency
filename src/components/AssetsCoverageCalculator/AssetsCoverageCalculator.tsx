import { Box, Button, TextField, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

import styles from './AssetsCoverageCalculator.module.scss';

const AssetsCoverageCalculator: FC = () => {
    const [description, setDescription] = useState('');
    const [assets, setAssets] = useState(0);
    const [obligations, setObligations] = useState(0);
    const [isSubmitDisabled, setSubmitDisabled] = useState(true);
    const [calculationResult, setCalculationResult] = useState(0);

    const calculateResult = () => {
        setCalculationResult(assets / obligations)
    };

    useEffect(() => {
        setSubmitDisabled(obligations <= 0);
    }, [obligations]);

    return (
        <Box>
            <Box className={styles.container}>
                <TextField required onChange={(event) => setAssets(Number(event.target.value))} value={assets} label='Все активы (руб.)' />
                <TextField required onChange={(event) => setObligations(Number(event.target.value))} value={obligations} label='Все обязательства (руб.)' />
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

export default AssetsCoverageCalculator;
