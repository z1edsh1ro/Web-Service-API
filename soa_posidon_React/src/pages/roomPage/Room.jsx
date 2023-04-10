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

export default function Room() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/rooms")
      .then(res => res.json())
      .then(
        (result) => {
          setRooms(result)
          console.log(result);
        }
      )
  }, [])

  const Update = (id) => {
    window.location = 'rooms/update/id/' + id
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>

        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              ตารางข้อมูลห้องในโรงแรม
            </Typography>
          </Box>

        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">floor</TableCell>
                <TableCell align="right">roomtype</TableCell>
                <TableCell align="right">pricePerDay</TableCell>
                <TableCell align="right">status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms.map((room) => (
                <TableRow
                  key={room.rid}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{room.rid}</TableCell>
                  <TableCell align="right">{room.floor.name}</TableCell>
                  <TableCell align="right">{room.roomtype.name}</TableCell>
                  <TableCell align="right">{room.roomtype.pricePerDay}</TableCell>
                  <TableCell align="right">{room.status.name}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => Update(room.rid)}>Edit</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}