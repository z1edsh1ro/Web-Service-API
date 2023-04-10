import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function createRecreation() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    const [name, setName] = useState('');
    const [pricePerHour, setPricePerHour] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "pricePerHour": pricePerHour
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/recreations", requestOptions)
            .then(response => response.json())
            .then(result => {
                

                    MySwal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'You clicked the button!'
                    })
                    navigate('/Recreations')
                
                
                console.log(result)
            })
            .catch(error => {
                
                console.log('error', error)
            });
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography variant='h6' gutterBottom component="div">
                สร้างสันทนาการ
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
                            <Button type='submit' variant="contained" fullWidth>create</Button>
                        </Grid>
                    </Grid>

                </form>

            </Container>
        </React.Fragment>
    )
}
