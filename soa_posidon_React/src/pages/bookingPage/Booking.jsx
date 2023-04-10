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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/bookings")
      .then(res => res.json())
      .then(
        (result) => {
          setBookings(result)
          console.log(result);
        }
      )
  }, [])

  const ChkUpdate = (id) => {
    fetch("http://localhost:8080/api/bookings/id/" + id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => {
        if (result.chkout === null) {
          Update(id)
        }
        else {
          MySwal.fire({
            icon: 'error',
            title: 'ไม่สามารถเปลี่ยนวันออกได้',
            text: 'การจองนี้ได้ Chk Out หรือ ยกเลิก ไปแล้ว'
          })
        }
      })
      .catch(error => console.log('error', error));
  }

  const Update = (id) => {
    navigate('/bookings/update/id/' + id)
  }

  const ChkChkIn = (id) => {
    fetch("http://localhost:8080/api/bookings/id/" + id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => {
        if (result.chkin === null && result.chkout === null) {
          ChkIn(id)
        }
        else {
          MySwal.fire({
            icon: 'error',
            title: 'ไม่สามารถ Chk In ได้',
            text: 'การจองนี้ได้ Chk In ไปแล้ว หรือ ถูกยกเลิกแล้ว'
          })
        }
      })
      .catch(error => console.log('error', error));
  }

  const ChkIn = (id) => {
    fetch(`http://localhost:8080/api/bookings/chkin/${id}`, {
      method: 'PUT'
    })
      .then(response => response.text())
      .then(result => {
        MySwal.fire({
          icon: 'success',
          title: 'การทำงานเสร็จสิ้น',
          text: 'Chk In สำเร็จ'
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

  const ChkChkOut = (id) => {
    fetch("http://localhost:8080/api/bookings/id/" + id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => {
        if (result.chkout === null) {
          ChkOut(id)
        }
        else {
          MySwal.fire({
            icon: 'error',
            title: 'ไม่สามารถ Chk Out ได้',
            text: 'การจองนี้ได้ Chk Out หรือ ยกเลิก ไปแล้ว'
          })
        }
      })
      .catch(error => console.log('error', error));
  }

  const ChkOut = (id) => {

    fetch(`http://localhost:8080/api/bookings/chkout/${id}`, {
      method: 'PUT'
    })
      .then(response => response.text())
      .then(result => {
        MySwal.fire({
          icon: 'success',
          title: 'การทำงานเสร็จสิ้น',
          text: 'Chk Out สำเร็จ'
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

  const GetAll = () => {
    fetch("http://localhost:8080/api/bookings")
      .then(res => res.json())
      .then(
        (result) => {
          setBookings(result)
          MySwal.fire({
            icon: 'success',
            title: 'การทำงานเสร็จสิ้น',
            text: 'แสดงผลสำเร็จ'
          })
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

  const GetNotCkhOut = () => {
    fetch("http://localhost:8080/api/bookings/current")
      .then(res => res.json())
      .then(
        (result) => {
          setBookings(result)
          MySwal.fire({
            icon: 'success',
            title: 'การทำงานเสร็จสิ้น',
            text: 'แสดงผลสำเร็จ'
          })
          
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

  const GetNotCkhIn = () => {
    fetch("http://localhost:8080/api/bookings/books")
      .then(res => res.json())
      .then(
        (result) => {
          setBookings(result)
          MySwal.fire({
            icon: 'success',
            title: 'การทำงานเสร็จสิ้น',
            text: 'แสดงผลสำเร็จ'
          })
          
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

  const GetHistory = () => {
    fetch("http://localhost:8080/api/bookings/history")
      .then(res => res.json())
      .then(
        (result) => {
          setBookings(result)
          MySwal.fire({
            icon: 'success',
            title: 'การทำงานเสร็จสิ้น',
            text: 'แสดงผลสำเร็จ'
          })
          
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

  const ChkPayment = (id) => {
    fetch("http://localhost:8080/api/bookings/id/" + id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => {
        if (result.chkout !== null && result.chkin !== null)  {
          console.log("ผ่าน")
          navigate('/bookings/payment/' + id)
        }
        else {
          MySwal.fire({
            icon: 'error',
            title: 'การเข้าพักนี้ ยังไม่ได้ Chk Out หรือ ถูกยกเลิกไปแล้ว'
          })
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>

        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              ตารางข้อมูลการจองห้อง
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => GetAll()}>All</Button>
                <Button onClick={() => GetNotCkhIn()}>Not Chk In</Button>
                <Button onClick={() => GetNotCkhOut()}>Not Chk Out</Button>
                <Button onClick={() => GetHistory()}>History</Button>
              </ButtonGroup>
            </Typography>

          </Box>
          <Box>
            <Link href="bookings/create/guest">
              <Button variant="contained">จองห้อง</Button>
            </Link>
            <Link href="bookings/create/counter">
              <Button variant="contained">เปิดห้อง</Button>
            </Link>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Guest</TableCell>
                <TableCell align="center">Room</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">FirstDate</TableCell>
                <TableCell align="center">LastDate</TableCell>
                <TableCell align="center">ChkIn</TableCell>
                <TableCell align="center">ChkOut</TableCell>
                <TableCell align="center">OP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow
                  key={booking.bid}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{booking.guest.name} {booking.guest.surname}</TableCell>
                  <TableCell align="center">{booking.room.rid}</TableCell>
                  <TableCell align="center">{booking.status.name}</TableCell>
                  <TableCell align="center">{booking.firstDate}</TableCell>
                  <TableCell align="center">{booking.lastDate}</TableCell>
                  <TableCell align="center">{moment(booking.chkin).format('YYYY MM DD HH:mm:ss')}</TableCell>
                  <TableCell align="center">{moment(booking.chkout).format('YYYY MM DD HH:mm:ss')}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => ChkUpdate(booking.bid)}>Edit</Button>
                      <Button onClick={() => ChkChkIn(booking.bid)}>Chk In</Button>
                      <Button onClick={() => ChkChkOut(booking.bid)}>Chk Out</Button>
                      <Button onClick={() => ChkPayment(booking.bid)}>Payment</Button>
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