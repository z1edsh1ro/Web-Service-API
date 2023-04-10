import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

export default function Update() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/supplies/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                setName(result.name);
                setQuantity(result.quantity);
                setPrice(result.price);
            })
            .catch(error => console.log('error', error));
        }, [id])

    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "quantity": quantity,
            "price": price,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/supplies/id/"+id, requestOptions)
        .then(response => response.text())
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'เพิ่มข้อมูลพนักงานออกสำเร็จ'
                })
                navigate('/supplies')
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
                    อัปเดตสินค้าในคลัง
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="name" label="Name" variant='outlined'
                                fullWidth required
                                onChange={(e) => setName(e.target.value)}
                                value={name}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="quantity" label="Quantity" variant='outlined'
                                fullWidth required
                                onChange={(e) => setQuantity(e.target.value)} 
                                value={quantity}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="price" label="Price" variant='outlined'
                                fullWidth required
                                onChange={(e) => setPrice(e.target.value)} 
                                value={price}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>สมัคร</Button>
                        </Grid>
                    </Grid>

                </form>

            </Container>
        </React.Fragment>
    );
}