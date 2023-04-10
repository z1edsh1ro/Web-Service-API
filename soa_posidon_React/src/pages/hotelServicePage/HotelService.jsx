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
import { useNavigate } from 'react-router-dom';


export default function HotelService(){
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  // const keys = ["rcId"];
  useEffect(() => {
    fetch("http://localhost:8080/api/hotels/services")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result)
          console.log(result);
        }
      )
  }, [])

  const Update = (id) => {
    window.location = 'services/update/id/' + id
  }

  const Delete = (id) => {
    console.log(id)
    fetch(`http://localhost:8080/api/hotels/services/id/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        navigate(0)
        alert('Success');
        if (!response.ok) {
          throw new Error('Network response was not ok');

        }
        // do something after successful delete
      })
      .catch(error => {
        console.error('There was a problem deleting the resource:', error);
      });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>

        <Box display="flex" justifyContent={'space-between'}>
          <Box >
            <Typography variant="h6" gutterBottom>
              บริการโรงแรม
            </Typography>
          </Box>
          <Box>
            <Link href="/hotel/services/create">
              <Button variant="contained">Create</Button>
            </Link>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">SevID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow
                  key={row.sevId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{row.sevId}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>

                  {/* <TableCell align="right">{row.dateEnd}</TableCell> */}
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => Update(row.sevId)}>Edit</Button>
                      <Button onClick={() => Delete(row.sevId)}>Del</Button>
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