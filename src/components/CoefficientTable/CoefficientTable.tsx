import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, {FC} from 'react';
import styles from './SolvenciesTable.module.scss';

interface Props {
    heading: string;
    type: 'absoluteLiquitidy' | 'asstesCoverage' | 'commonSolvency' | 'currentLiquidity' | 'obligationsSolvency';
    data: any;
}

const CoefficientTable: FC<Props> = ({type, data, heading}) => {
    return (
        <Box className={styles.tableContainer}>
            <Typography className={styles.heading}>{heading}</Typography>
            <TableContainer className={styles.table} component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Дата</TableCell>
                        <TableCell align="right">Коэффициент</TableCell>
                        <TableCell align="right">Результат</TableCell>
                        <TableCell align="right">Описание</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.date}
                          </TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.result}</TableCell>
                          <TableCell align="right">{row.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
        </Box>
    );
};

export default CoefficientTable;
