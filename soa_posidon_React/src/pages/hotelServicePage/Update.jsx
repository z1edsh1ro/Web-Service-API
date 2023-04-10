import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Update() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/hotels/services/id/" + id, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setName(result.name);
            setPrice(result.price);
        })
        .catch(error => console.log('error', error));
    }, [id])


    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "sevId": id,
            "name": name,
            "price": price
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/hotels/services/id/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                navigate('/hotel/services')
                alert('Success');
            })
            .catch(error => console.log('error', error));
    }



    return (
        <React.Fragment>

            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography variant='h6' gutterBottom component="div">
                    สร้างบริการโรงแรม
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
                            <TextField id="price" label="price" variant='outlined'
                                fullWidth required
                                onChange={(e) => setPrice(e.target.value)}
                                value={price} />
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