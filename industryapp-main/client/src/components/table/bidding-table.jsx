import React, { useState } from 'react';

import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Label from 'src/components/label';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TableContainer from '@mui/material/TableContainer';

// ----------------------------------------------------------------------

const BiddingsTable = () => {
  const [acceptedRow, setAcceptedRow] = useState(null);
  const [open, setOpen] = useState(false);

  // Dummy data for BiddingsTable
  const biddingsData = [
    { no: 1, agencyName: 'ABC Agency', ratings: 4.5, amount: '$500' },
    { no: 2, agencyName: 'XYZ Agency', ratings: 4.0, amount: '$700' },
    { no: 3, agencyName: 'LMN Agency', ratings: 3.5, amount: '$600' },
    { no: 4, agencyName: 'PQR Agency', ratings: 4.2, amount: '$800' },
  ];

  const handleAccept = (rowNo) => {
    setAcceptedRow(rowNo);
  };

  const handleReject = (rowNo) => {
    const updatedBiddingsData = biddingsData.filter((bid) => bid.no !== rowNo);
    setAcceptedRow(null);
    setBiddingsData(updatedBiddingsData);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Biddings Table</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Biddings Table</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper} sx={{ width: 500 }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Agency Name</TableCell>
                  <TableCell>Ratings</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
                {biddingsData.map((bid) => (
                  <TableRow key={bid.no}>
                    <TableCell>{bid.no}</TableCell>
                    <TableCell>{bid.agencyName}</TableCell>
                    <TableCell>{bid.ratings}</TableCell>
                    <TableCell>{bid.amount}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="success">
                        Accept
                      </Button>
                    </TableCell>

                    <TableCell>
                      <Button variant="contained" color="error">
                        Reject
                      </Button>
                    </TableCell>


                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BiddingsTable;