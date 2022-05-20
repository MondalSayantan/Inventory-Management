import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const InventoryTable = ({ list, deleteProduct }) => {
  return (
    <div>
      <h3>Inventory Details</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Product ID</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Product Type</TableCell>
              <TableCell align="right">Product Cost&nbsp;(per unit)</TableCell>
              <TableCell align="right">
                Product Quantity&nbsp;(On Hand)
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.ProductId}</TableCell>
                <TableCell align="right">{row.ProductName}</TableCell>
                <TableCell align="right">{row.ProductType}</TableCell>
                <TableCell align="right">{row.ProductCost}</TableCell>
                <TableCell align="right">{row.Quantity}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      deleteProduct(row.ProductId);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InventoryTable;
