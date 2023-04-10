import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography, Button, TextareaAutosize,InputLabel  } from '@mui/material'
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

export default function CreateRecordHotelService() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();

    const [ser, setSer] = useState({});
    const [service, setService] = useState([]);

    const [b, setB] = useState({});
    const [booking, setBooking] = useState([]);

    const [s, setS] = useState({});
    const [staff, setStaff] = useState([]);

    const [comment, setComment] = useState([]);

    useEffect(() => {


        fetch("http://localhost:8080/api/staffs")
            .then(res => res.json())
            .then(
                (result) => {
                    setS(result)
                    console.log(result);
                }
            )
    }, [])

    useEffect(() => {
        const obj = localStorage.getItem('guest');
        const guest = JSON.parse(obj)
        console.log(guest.guest.name)
        
        fetch(`http://localhost:8080/api/bookings/name/${guest.guest.name}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setB(result)
                    console.log(result);
                }
            )
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/api/hotels/services")
            .then(res => res.json())
            .then(
                (result) => {
                    setSer(result)
                    console.log(result);
                }
            )
    }, [])

    const handleSubmit = event => {
        const now = new Date();

        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "hotelservice": service,
            "booking": booking,
            "staff": staff,
            "time": now,
            "comment": comment
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/records/services", requestOptions)
            .then(response => response.text())
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'เพิ่มบันทึกบริการโรงแรมสำเร็จ'
                })
                navigate('/home')
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
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography variant='h6' gutterBottom component="div">
                    รีวิวบริการโรงแรม
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputLabel
                                style={{marginBottom: '1rem'}}
                            >Booking</InputLabel>
                            <Select
                                hideSelectedOptions={true}
                                id="booking"
                                label="Booking"
                                variant="outlined"
                                fullWidth
                                required
                                options={b}
                                onChange={(selected) => setBooking(selected)}
                                getOptionLabel={(booking) => 'รหัส '+booking.bid +' '+ 'ห้อง'+booking.room.rid}
                                getOptionValue={(booking) => booking.bid}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel
                                style={{marginBottom: '1rem'}}
                            >Hotel Service</InputLabel>
                            <Select
                                hideSelectedOptions={true}
                                id="service"
                                label="Service"
                                variant="outlined"
                                fullWidth
                                required
                                options={ser}
                                onChange={(selected) => setService(selected)}
                                getOptionLabel={(service) => service.name}
                                getOptionValue={(service) => service.sevId}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel
                                style={{marginBottom: '1rem'}}
                            >Staff</InputLabel>
                            <Select
                                hideSelectedOptions={true}
                                id="staff"
                                label="Staff"
                                variant="outlined"
                                fullWidth
                                required
                                options={s}
                                onChange={(selected) => setStaff(selected)}
                                getOptionLabel={(staff) => staff.name + " " + staff.surname}
                                getOptionValue={(staff) => staff.sid}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel
                                style={{marginBottom: '1rem'}}
                            >Comment</InputLabel>
                            <TextareaAutosize id="comment" label="Comment" variant='outlined'
                                style={{ width: '100%' ,minHeight: '200px'}}
                                required
                                onChange={(e) => setComment(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>Create</Button>
                        </Grid>
                    </Grid>

                </form>
            </Container>
        </React.Fragment>
    );
}