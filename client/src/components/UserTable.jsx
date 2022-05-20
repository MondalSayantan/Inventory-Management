import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const UserTable = ({ list }) => {
  return (
    <div>
      <h3>Customer Details</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Inventory ID</TableCell> */}
              <TableCell align="right">Customer ID</TableCell>
              <TableCell align="right">Customer Name</TableCell>
              <TableCell align="right">Customer Mobile</TableCell>
              <TableCell align="right">Customer Email</TableCell>
              <TableCell align="right">Customer Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.UserId}</TableCell>
                <TableCell align="right">{row.UserName}</TableCell>
                <TableCell align="right">{row.Mobile}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
