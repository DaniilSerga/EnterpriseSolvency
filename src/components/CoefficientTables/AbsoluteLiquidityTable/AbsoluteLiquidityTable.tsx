import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, {FC} from 'react';
import { AbsoluteLiquidity } from 'types/Solvency';

import styles from '../tablesStyles.module.scss';

interface Props {
    data: AbsoluteLiquidity[];
};

const AbsoluteLiquidityTable: FC<Props> = ({data}) => {
    return (
        <Box className={styles.tableContainer}>
            <Typography className={styles.heading}>Абсолютная ликвидность</Typography>
            <TableContainer className={styles.table} component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Дата</TableCell>
                        <TableCell align="right">Активы</TableCell>
                        <TableCell align="right">Обязательства</TableCell>
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
                          <TableCell align="right">{row.obligations}</TableCell>
                          <TableCell align="right">{row.shortTermLiabilities}</TableCell>
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

export default AbsoluteLiquidityTable;
