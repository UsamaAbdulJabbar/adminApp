import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein,loss) {
  return { name, calories, fat, carbs, protein,loss };
}

const rows = [
  createData('January', 159, 150, 9, '92%','8%'),
  createData('Februry', 237, 230, 7, '92%','8%'),
  createData('March', 262, 262, 0, '100%','0%'),
  createData('April', 305, 290, 15, '85%','15%'),
  createData('May', 159, 150, 9, '92%','8%'),
  createData('June', 262, 262, 0, '100%','0%'),
  createData('July', 305, 290, 15, '85%','15%'),
  createData('August', 159, 150, 9, '92%','8%'),
  createData('September', 305, 3.7, 67, 4.3),
  createData('October', 305, 290, 15, '85%','15%'),
  createData('November' ,159, 150, 9, '92%','8%'),
  createData('December', 159, 150, 9, '92%','8%'),
  createData('March', 262, 262, 0, '100%','0%'),
 
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Month</StyledTableCell>
            <StyledTableCell align="right">Order</StyledTableCell>
            <StyledTableCell align="right">Complete</StyledTableCell>
            <StyledTableCell align="right">InComplete</StyledTableCell>
            <StyledTableCell align="right">Profit</StyledTableCell>
            <StyledTableCell align="right">Loss</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.loss}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
