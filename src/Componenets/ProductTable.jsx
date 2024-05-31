import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses ,
  TableBody,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d3e3d7",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const ProductTable = ({ products }) => {
  const tableHeaders = Object.keys(products[0] || {});

  return (
    <div>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <StyledTableCell ></StyledTableCell>
            {tableHeaders.map(header => (
              <StyledTableCell key={header}>{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow key={product._id}>
              <TableCell ><Link>D</Link></TableCell>
              {tableHeaders.map(header => (
                <TableCell key={header}>{product[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
