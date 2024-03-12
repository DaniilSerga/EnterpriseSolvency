import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, {FC} from 'react';
import styles from '../tablesStyles.module.scss';
import { CommonSolvency } from 'types';

interface Props {
    data: CommonSolvency[];
}

const CommonSolvencyTable: FC<Props> = ({data}) => {
    return (
        <Box className={styles.tableContainer}>
            <Typography className={styles.heading}>Платёжеспособность</Typography>
            <TableContainer className={styles.table} component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Дата</TableCell>
                        <TableCell align="right">Деньги на начало года</TableCell>
                        <TableCell align="right">Деньги на конец года</TableCell>
                        <TableCell align="right">Деньги израсходованные за год</TableCell>
                        <TableCell align="right">Результат</TableCell>
                        <TableCell align="right">Описание</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.date}
                          </TableCell>
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

export default CommonSolvencyTable;
