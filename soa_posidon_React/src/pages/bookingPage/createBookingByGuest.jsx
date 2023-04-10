import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography, Button } from '@mui/material'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

export default function CreateBookingByGuest() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const [r, setR] = useState('');
    const [status, setStatus] = useState({});
    const [firstDate, setFirstDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/guests")
            .then(res => res.json())
            .then(
                (result) => {
                    setGuests(result)
                    console.log(result);
                    setStatus({
                        "statusId": 5,
                        "name": "จองห้อง",
                        "forWhat": "booking"
                    })
                }
            )
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/api/rooms/status/1")
            .then(res => res.json())
            .then(
                (result) => {
                    setRooms(result)
                    console.log(result);
                }
            )
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const formattedFirstDate = firstDate.toISOString().split('T')[0];
        console.log(`Selected date: ${formattedFirstDate}`);

        const formattedLastDate = lastDate.toISOString().split('T')[0];
        console.log(`Selected date: ${formattedLastDate}`);

        var raw = JSON.stringify({
            "guest": ({
                "gid": 1,
                "name": "บวรวัชร",
                "surname": "ทองอยู่",
                "username": "bowornwat.b@ku.th",
                "password": "123456",
                "phone": "0944173434"
            }),
            "room": r,
            "status": status,
            "firstDate": formattedFirstDate,
            "lastDate": formattedLastDate
        });

        console.log(raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/bookings/guest", requestOptions)
            .then(1)
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'จองห้องสำเร็จ'
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
                    จองห้อง
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Select
                                hideSelectedOptions={false}
                                id="room"
                                label="Room"
                                variant="outlined"
                                fullWidth
                                required
                                options={rooms}
                                onChange={(selected) => setR(selected)}
                                getOptionLabel={(room) => room.rid}
                                getOptionValue={(room) => room.rid}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            วันที่พักวันแรก
                            <DatePicker
                                hideSelectedOptions={false}
                                id="firstDate"
                                label="firstDate"
                                variant="outlined"
                                fullWidth
                                required
                                selected={firstDate}
                                onChange={date => setFirstDate(date)}
                                minDate={new Date()}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            วันที่พักวันสุดท้าย
                            <DatePicker
                                hideSelectedOptions={false}
                                id="lastDate"
                                label="lastDate"
                                variant="outlined"
                                fullWidth
                                required
                                selected={lastDate}
                                onChange={date => setLastDate(date)}
                                minDate={firstDate}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>จอง</Button>
                        </Grid>
                    </Grid>



                </form>

            </Container>
        </React.Fragment>
    );
}