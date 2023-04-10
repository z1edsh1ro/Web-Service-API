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
import moment from 'moment';

export default function Visit() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/visits")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setUsers(result)
        }
      )
  }, [])

  const Update = (id) => {
    window.location = 'visit/update/id/' + id
  }

  const Delete = (id) => {

    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/visits/id/" + id, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        location.reload();
      })
      .catch(error => console.log('error', error));
  }
  const search = (data) => {
    return data.filter((item =>
      item.comment.toLowerCase().includes(query)
      ||
      item.timeout.toLowerCase().includes(query)
      ||
      item.timein.toLowerCase().includes(query)
      ||
      item.guest.name.toLowerCase().includes(query)
      ||
      item.recreation.name.toLowerCase().includes(query)
    ))
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>

        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              การบริการสันทนาการ
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
            <Link href="visit/create">
              <Button variant="contained">Create</Button>
            </Link>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>idProject</TableCell>
                <TableCell align="right">VID</TableCell>
                <TableCell align="right">Guest</TableCell>
                <TableCell align="right">Recreation</TableCell>
                <TableCell align="right">Timeinn</TableCell>
                <TableCell align="right">TimeOut</TableCell>
                <TableCell align="right">Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {search(users).map((row) => (
                <TableRow
                  key={row.vid}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.vid}
                  </TableCell>
                  <TableCell align="right">{row.vid}</TableCell>
                  <TableCell align="right">{row.guest.name} {row.guest.surname}</TableCell>
                  <TableCell align="right">{row.recreation.name}</TableCell>
                  <TableCell align="right">{moment(row.timein).format('YYYY MM DD HH:mm:ss')}</TableCell>
                  <TableCell align="right">{moment(row.timeout).format('YYYY MM DD HH:mm:ss')}</TableCell>
                  <TableCell align="right">{row.comment}</TableCell>
                  {/* <TableCell align="right">{row.dateEnd}</TableCell> */}
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => Update(row.vid)}>edit</Button>
                      <Button onClick={() => Delete(row.vid)}>Del</Button>
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