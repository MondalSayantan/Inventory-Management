import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const PurchaseTable = ({ list }) => {
  return (
    <div>
      <h3>Purchase Details</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Inventory ID</TableCell> */}
              <TableCell align="right">Purchase ID</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Supplier ID</TableCell>
              <TableCell align="right">Quantity Received</TableCell>
              <TableCell align="right">Purchase Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.PurchaseId}</TableCell>
                <TableCell align="right">{row.ProductName}</TableCell>
                <TableCell align="right">{row.SupplierId}</TableCell>
                <TableCell align="right">{row.QuantityReceived}</TableCell>
                <TableCell align="right">{row.PurchaseCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PurchaseTable;
