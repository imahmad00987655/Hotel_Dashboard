import React, { useState, useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  Box,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const DataTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const data = useMemo(
    () => [
      {
        id: 1,
        guestName: 'John Doe',
        roomType: 'Deluxe',
        checkIn: '2024-03-15',
        checkOut: '2024-03-20',
        status: 'Confirmed',
        amount: '$500',
      },
      {
        id: 2,
        guestName: 'Jane Smith',
        roomType: 'Suite',
        checkIn: '2024-03-16',
        checkOut: '2024-03-18',
        status: 'Pending',
        amount: '$800',
      },
      {
        id: 3,
        guestName: 'Robert Johnson',
        roomType: 'Standard',
        checkIn: '2024-03-17',
        checkOut: '2024-03-19',
        status: 'Confirmed',
        amount: '$300',
      },
      {
        id: 4,
        guestName: 'Emily Davis',
        roomType: 'Executive',
        checkIn: '2024-03-18',
        checkOut: '2024-03-22',
        status: 'Confirmed',
        amount: '$1000',
      },
      {
        id: 5,
        guestName: 'Michael Wilson',
        roomType: 'Presidential',
        checkIn: '2024-03-19',
        checkOut: '2024-03-21',
        status: 'Pending',
        amount: '$1500',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'Guest Name', accessor: 'guestName' },
      { Header: 'Room Type', accessor: 'roomType' },
      { Header: 'Check In', accessor: 'checkIn' },
      { Header: 'Check Out', accessor: 'checkOut' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Amount', accessor: 'amount' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page: tablePage,
    state: { globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: rowsPerPage },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search bookings..."
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          sx={{ mb: 2 }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sx={{
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {column.render('Header')}
                    <IconButton size="small">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowDownward fontSize="small" />
                        ) : (
                          <ArrowUpward fontSize="small" />
                        )
                      ) : null}
                    </IconButton>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            <AnimatePresence>
              {tablePage.map((row) => {
                prepareRow(row);
                return (
                  <motion.tr
                    {...row.getRowProps()}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {row.cells.map((cell) => (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    ))}
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </motion.div>
  );
};

export default DataTable; 