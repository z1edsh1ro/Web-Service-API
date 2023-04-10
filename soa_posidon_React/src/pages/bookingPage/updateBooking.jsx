import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography, Button } from '@mui/material'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CreateBookingByGuest() {
    const { id } = useParams();
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const [g, setG] = useState('');
    const [r, setR] = useState('');
    const [status, setStatus] = useState({});
    const [lastDate, setLastDate] = useState('');

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/bookings/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setG(result.guest);
                setR(result.room);
                setStatus(result.status);
                setLastDate(new Date(result.lastDate));
            })
            .catch(error => console.log('error', error));
    }, [id])

    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const formattedLastDate = lastDate.toISOString().split('T')[0];

        var raw = JSON.stringify({
            "guest": g,
            "room": r,
            "status": status,
            "firstDate": formattedLastDate,
            "lastDate": formattedLastDate
        });

        console.log(raw)

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/bookings/" + id, requestOptions)
            .then(1)
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'เปลี่ยนวันออกสำเร็จ'
                })
                navigate('/bookings')
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
                    เปลี่ยนวันออก
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
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
                                minDate={new Date()}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>เปลี่ยน</Button>
                        </Grid>
                    </Grid>

                </form>

            </Container>
        </React.Fragment>
    );
}