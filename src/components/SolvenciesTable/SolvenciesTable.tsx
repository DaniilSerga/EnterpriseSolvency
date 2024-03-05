import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, {FC, useEffect, useState} from 'react';
import { SolvencyEffects } from 'store';
import closeIcon from 'assets/close.svg';
import styles from './SolvenciesTable.module.scss';
import { Solvency } from 'types';

const SolvenciesTable: FC = () => {
    const solvencies = useAppSelector(state => state.SolvencyHistory);
    const [solvenciesHistory, setSolvenciesHistory] = useState<Solvency[]>([]);
    const dispatch = useAppDispatch();

    const getSolvencyHistory = async () => {
        await dispatch(SolvencyEffects.getSolvencyHistory());
    };

    const deleteSolvency = async (id: number) => {
        await dispatch(SolvencyEffects.removeSolvency(id));
        
        const filteredArray = solvenciesHistory.filter((solvency) => solvency.id !== id)
        setSolvenciesHistory(filteredArray);

        await getSolvencyHistory();
    };

    useEffect(() => {
        getSolvencyHistory();
    }, []);
    
    useEffect(() => {
        setSolvenciesHistory(solvencies);
    }, [solvencies]);

    return (
        <Box className={styles.tableContainer}>
            <Box className={styles.contentWrapper}>
                <Typography variant='h1' className={styles.heading}><span className={styles.highlightedText}>История</span> расчётов</Typography>
                {solvenciesHistory.length > 0 ? (
                    <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell align="center">№</TableCell>
                            <TableCell align="left">ДСнг (руб.)</TableCell>
                            <TableCell align="left">ДСкг (руб.)</TableCell>
                            <TableCell align="left">ДСиг (руб.)</TableCell>
                            <TableCell align="left"><span className={styles.highlightedText}>Кпл</span></TableCell>
                            <TableCell align="left">Описание</TableCell>
                            <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {solvenciesHistory.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="left">{row.startFunds}</TableCell>
                                    <TableCell align="left">{row.endFunds}</TableCell>
                                    <TableCell align="left">{row.spentFunds}</TableCell>
                                    <TableCell align="left">{row.calculationResult}</TableCell>
                                    <TableCell align="left">{row.description}</TableCell>
                                    <TableCell align="left">
                                        <Box className={styles.deleteIcon} onClick={() => deleteSolvency(row.id)}>
                                            <img src={closeIcon} alt="" />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                ) : (
                    <Typography paragraph className={styles.primaryText}>Здесь пока <span className={styles.highlightedText}>пусто</span>. Совершите хотя бы один расчёт и ваша история пополнится</Typography>
                )}
            </Box>
        </Box>
    );
};

export default SolvenciesTable;
