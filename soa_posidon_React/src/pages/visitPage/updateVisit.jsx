import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Select from 'react-select'
export default function Update() {
    const MySwal = withReactContent(Swal)

    const { id } = useParams();
    const [timein, setTimein] = useState(new Date());
    const [timeout, setTimeout] = useState(null);
    const [comment, setComment] = useState({});
    const [recreations, Setrecreations] = useState([]);
    const [R, SetR] = useState({});



    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/visits/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setTimein(result.timein);
                setTimeout(result.timeout);
                setComment(result.comment);
                SetR(result.recreation);

                console.log(timein);
                console.log(timeout);

            })
            .catch(error => console.log('error', error));
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
    }, [id])


    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const obj = localStorage.getItem('guest');
        const guest = JSON.parse(obj)
        console.log(guest.guest.name)
        var raw = JSON.stringify({
            "guest": guest.guest,
            "recreation": R,
            "timein": timein,
            "timeout": timeout,
            "comment": comment
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/visits/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'You clicked the button!'
                })
                window.location.href = '/visits';
                console.log(result)
            })
            .catch(error => {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
                console.log('error', error)
            });
    }



    return (
        <React.Fragment>

            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography variant='h6' gutterBottom component="div">
                    create
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
                                value={R}
                                onChange={(selected) => SetR(selected)}
                                getOptionLabel={(recreation) => recreation.name + " " + recreation.pricePerHour+"  บาท"}
                                getOptionValue={(recreation) => recreation.rcId}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="timein" label="timein" variant='outlined' type='date'
                                fullWidth required
                                value={timein}
                                onChange={(e) => setTimein(e.target.value)}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="timeout" label="timeout" variant='outlined' type='date'
                                fullWidth required
                                value={timeout}
                                onChange={(e) => setTimeout(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="comment" label="comment" variant='outlined'
                                fullWidth required
                                onChange={(e) => setComment(e.target.value)}
                                value={comment} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>update</Button>
                        </Grid>
                    </Grid>

                </form>

            </Container>
        </React.Fragment>
    );
}