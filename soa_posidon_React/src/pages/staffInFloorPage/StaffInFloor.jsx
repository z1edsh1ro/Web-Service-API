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

export default function StaffInFloor() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();
  const [staffsInFloors, setStaffsInFloors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/staffsinfloors")
      .then(res => res.json())
      .then(
        (result) => {
          setStaffsInFloors(result)
          console.log(result);
        }
      )
  }, [])

  const Delete = (id) => {

    fetch(`http://localhost:8080/api/staffsinfloors/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.text())
      .then(result => {
        MySwal.fire({
          icon: 'success',
          title: 'การทำงานเสร็จสิ้น',
          text: 'ลบข้อมูลหน้าที่ประจำของพนักงานออกสำเร็จ'
        })
        navigate(0)
        console.log(result)
      })
      .catch(error => {
        MySwal.fire({
          icon: 'error',
          title: 'มีบางอย่างผิดพลาด',
          text: 'กรุณาลองใหม่อีกครั้งหรือแจ้งเจ้าหน้าที่ IT หากไม่สำเร็จอีก',
        })
        console.log('error', error)
      });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>

        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              ตารางหน้าที่ประจำของพนักงาน
            </Typography>
          </Box>
          <Box>
            <Link href="staffsinfloors/create">
              <Button variant="contained">Create</Button>
            </Link>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Staff</TableCell>
                <TableCell align="right">Floor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffsInFloors.map((staffInFloor) => (
                <TableRow
                  key={staffInFloor.sifId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{staffInFloor.staff.name} {staffInFloor.staff.surname}</TableCell>
                  <TableCell align="right">{staffInFloor.floor.name}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => Delete(staffInFloor.sifId)}>Delete</Button>
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