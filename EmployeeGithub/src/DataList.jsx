import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './DataList.css'; // Import the CSS file

export default function DataList({ data }) {
  return (
    <TableContainer component={Paper} >
      <Table className='datalist__table' sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead className='table__head'>
          <TableRow className="table__row">
            <TableCell className='table__cell'><h5>First Name</h5></TableCell>
            <TableCell className='table__cell'><h5>Last Name</h5></TableCell>
            <TableCell className='table__cell'><h5>Education</h5></TableCell>
            <TableCell className='table__cell'><h5>Phone</h5></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
           return (
           <TableRow className="table__row"  key={row.id}>
              <TableCell className='table__cell' >{row.fname}</TableCell>
              <TableCell className='table__cell' >{row.lname}</TableCell>
              <TableCell className='table__cell' >{row.edu}</TableCell>
              <TableCell className='table__cell' >{row.phone}</TableCell>
            </TableRow>
            )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
