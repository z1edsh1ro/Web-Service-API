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


export default function Recreation() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const MySwal = withReactContent(Swal)
  // const keys = ["rcId"];
  useEffect(() => {
    fetch("http://localhost:8080/api/recreations")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result)
          console.log(result);
        }
      )
  }, [])

  const Update = (id) => {
    window.location = 'recreation/update/id/' + id
  }

  const Delete = (id) => {

    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/recreations/id/" + id, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        MySwal.fire({
          icon: 'success',
          title: 'Good job!',
          text: 'You clicked the button!'
      })
      location.reload();
      })
      .catch(error => console.log('error', error));
  }
  const search = (data) => {
    return data.filter((item =>
      // item.rcId.toLowerCase().includes(query)
      // ||
      item.name.toLowerCase().includes(query)
      // ||
      // item.pricePerHour.toLowerCase().includes(query)
    ))
  }
  //   // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //     // ||
  //     // item.pricePerHour.toLowerCase().includes(query)
  //   )

  // }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>

        <Box display="flex" justifyContent={'space-between'}>
          <Box >
            <Typography variant="h6" gutterBottom>
            สันทนาการ
            </Typography>
          </Box>
          <Box>
            <input
              type="text"
              placeholder='Search..'
              className='search'
              onChange={(e) => setQuery(e.target.value)} />
          </Box>
          <Box>
            <Link href="recreation/create">
              <Button variant="contained">Create</Button>
            </Link>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>idProject</TableCell>
                <TableCell align="right">RCID</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">price</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {search(users).map((row) => (
                <TableRow
                  key={row.rcId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.rcId}
                  </TableCell>
                  <TableCell align="right">{row.rcId}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.pricePerHour}</TableCell>

                  {/* <TableCell align="right">{row.dateEnd}</TableCell> */}
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => Update(row.rcId)}>edit</Button>
                      <Button onClick={() => Delete(row.rcId)}>Del</Button>
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
