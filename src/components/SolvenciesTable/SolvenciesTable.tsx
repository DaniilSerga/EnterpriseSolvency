import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, {FC, useEffect} from 'react';
import { SolvencyEffects } from 'store';
import styles from './SolvenciesTable.module.scss';

const SolvenciesTable: FC = () => {
    const solvencies = useAppSelector(state => state.SolvencyHistory);
    const dispatch = useAppDispatch();

    const getSolvencyHistory = async () => {
        await dispatch(SolvencyEffects.getSolvencyHistory());
    }

    useEffect(() => {
        getSolvencyHistory();
    }, []);
    
    useEffect(() => {
        console.log(solvencies);
    }, [solvencies]);

    return (
        <Box className={styles.tableContainer}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                          <TableCell align="right">№</TableCell>
                          <TableCell align="right">ДСнг (руб.)</TableCell>
                          <TableCell align="right">ДСкг (руб.)</TableCell>
                          <TableCell align="right">ДСиг</TableCell>
                          <TableCell align="right">Кпл</TableCell>
                          <TableCell align="right">Описание</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {solvencies.map((row, index) => (
                          <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell align="right">{index}</TableCell>
                            <TableCell align="right">{row.startFunds}</TableCell>
                            <TableCell align="right">{row.endFunds}</TableCell>
                            <TableCell align="right">{row.spentFunds}</TableCell>
                            <TableCell align="right">{row.calculationResult}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </Box>
    );
};

export default SolvenciesTable;
