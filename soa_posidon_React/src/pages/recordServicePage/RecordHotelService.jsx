import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';


export default function RecordHotelService(){
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();
  const [recordHotelService, setRecordHotelService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/records/services")
      .then(res => res.json())
      .then(
        (result) => {
          setRecordHotelService(result)
          console.log(result);
        }
      )
  }, [])

  const Update = (id) => {
    window.location = 'record/update/id/' + id
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>

        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              บันทึกบริการโรงแรม
            </Typography>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Room</TableCell>
                <TableCell align="right">Staff</TableCell>
                <TableCell align="right">Hotel Service</TableCell>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right">Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recordHotelService.map((row) => (
                <TableRow
                  key={row.srId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{row.srId}</TableCell>
                  <TableCell align="right">ห้อง {row.booking.room.rid} {row.booking.room.floor.name}</TableCell>
                  <TableCell align="right">{row.staff.name} {row.staff.surname}</TableCell>
                  <TableCell align="right">{row.hotelservice.name}</TableCell>
                  <TableCell align="right" type="date">{row.time}</TableCell>
                  <TableCell align="right">{row.comment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}