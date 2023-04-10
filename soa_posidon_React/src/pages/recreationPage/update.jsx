import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function Update() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [pricePerHour, setPricePerHour] = useState('');
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/recreations/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setName(result.name);
                setPricePerHour(result.pricePerHour);
            })
            .catch(error => console.log('error', error));
    }, [id])


    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "rcId": id,
            "name": name,
            "pricePerHour": pricePerHour
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/recreations/id/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                MySwal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'You clicked the button!'
                })
                navigate('/recreations')
                
               
            })
            .catch(error => console.log('error', error));
    }



    return (
        <React.Fragment>

            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography variant='h6' gutterBottom component="div">
                    update Recreation
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="name" label="name" variant='outlined'
                                fullWidth required
                                onChange={(e) => setName(e.target.value)}
                                value={name} />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="pricePerHour" label="pricePerHour" variant='outlined'
                                fullWidth required
                                onChange={(e) => setPricePerHour(e.target.value)}
                                value={pricePerHour} />
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