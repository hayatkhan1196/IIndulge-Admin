import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import OrderDeatail from './OrderDeatail';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #fbbe36",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: '#ca2129',
     backgroundColor: '#fbbe36',
    color: theme.palette.common.black,
  },
 
}));

const columns = [
  { id: "Salers_id", label: "Salers ID", minWidth: 113, align:'center' },
  { id: "Salers_name", label: "Salers Name", minWidth: 190, align:'center' },
  {
    id: "location",
    label: "Location",
    minWidth: 190,
    align: "center",
 },
  {
    id: "email_id",
    label: "Email ID",
    minWidth: 140,
    align: "center",
  },
  {
    id: "saler_item",
    label: "Ordered Item",
    minWidth: 120,
    align: "center",
  },
  {
    id: "bill",
    label: "Bill",
    minWidth: 80,
    align: "center",
  },
  // {
  //   id: "order_detail",
  //   label: "Order Detail",
  //   minWidth: 170,
  //   align:'center'
  // },
  // {
  //   id: "block",
  //   label: "Block Customer",
  //   minWidth: 130,
  //   align: "center",
  //   // format: (value) => value.toFixed(2),
  // },
];
function createData(Salers_id, Salers_name, location, email_id, saler_item, bill) {
//   const orderd_item = location / email_id;
  return { Salers_id, Salers_name, location, email_id, saler_item,bill};
}


const CustomerList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

const { vertical, horizontal } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };
  //  const handleClose = () => {
  //   setState({ ...state, open: false });
  // };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const order_detail = (
  //   <Button variant="contained" onClick={handleOpen} size="small" style={{background:"green"}}>Saler Detail</Button>
  // )

const rows = [
    createData('01475', 'Joe', 'street 21', 'ali@gmail.com', 'sandwich', 46),
    createData('02351', 'Max Marsh', 'Hall Street', 'max@gmail.como','Noodles', 56 ),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49
    ),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49
    ),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49 ),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
];


  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrderDeatail />
        </Box>
      </Modal>
      <Typography variant="h6" gutterBottom component="div">
        SALERS LIST
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.Salers_name}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
 
    </div>
  );
};

export default CustomerList;
