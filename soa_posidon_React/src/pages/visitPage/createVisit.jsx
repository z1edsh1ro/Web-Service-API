import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Typography, Button } from '@mui/material';

function CreateVisit() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    const [timein, Settimein] = useState('');
    const [timeout, Settimeout] = useState('');
    const [comment, Setcomment] = useState('');
    const [recreations, Setrecreations] = useState([]);
    const [R, SetR] = useState('');



    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://localhost:8080/api/recreations", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                Setrecreations(result)

            })
            .catch(error => console.log('error', error));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const obj = localStorage.getItem('guest');
        const guest = JSON.parse(obj)
        console.log(guest.guest.name)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "guest": guest.guest,
            "recreation": R,
            "timein": timein,
            "timeout": timeout,
            "comment": comment
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/visits", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    // text: 'ก'
                })
                navigate('/visits')
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <React.Fragment>

            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography variant='h6' gutterBottom component="div">
                สันทนาการ
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Select
                                hideSelectedOptions={false}
                                id="recreations"
                                label="Recreations"
                                variant="outlined"
                                fullWidth
                                required
                                options={recreations}
                                onChange={(selected) => SetR(selected)}
                                getOptionLabel={(recreation) => recreation.name + " " + recreation.pricePerHour+"  บาท"}
                                getOptionValue={(recreation) => recreation.rcId}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="timein" variant='outlined' type='datetime-local'
                                fullWidth required
                                onChange={(e) => Settimein(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="timeout" variant='outlined' type='datetime-local'
                                fullWidth required
                                onChange={(e) => Settimeout(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="comment" label="comment" variant='outlined'
                                fullWidth required
                                onChange={(e) => Setcomment(e.target.value)} />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>สร้าง</Button>
                        </Grid>
                    </Grid>

                </form>

            </Container>
        </React.Fragment>
    )
}

export default CreateVisit