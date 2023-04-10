import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

export default function UpdateStaff() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [p, setP] = useState({});
    const [salary, setSalary] = useState('');
    const [phone, setPhone] = useState('');
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/staffs/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                setName(result.name);
                setSurname(result.surname);
                setP(result.position);
                setSalary(result.salary);
                setPhone(result.phone);
            })
            .catch(error => console.log('error', error));
    }, [id])

    useEffect(() => {
        fetch("http://localhost:8080/api/positions")
            .then(res => res.json())
            .then(
                (result) => {
                    setPositions(result)
                    console.log(result);
                }
            )
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "sid": id,
            "name": name,
            "surname": surname,
            "position": p,
            "salary": salary,
            "phone": phone,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/staffs/id/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'อัปเดตข้อมูลพนักงานสำเร็จ'
                })
                navigate('/staffs')
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
                    อัปเดตข้อมูลพนักงาน
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="name" label="Name" variant='outlined'
                                fullWidth required
                                onChange={(e) => setName(e.target.value)}
                                value={name} />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="surname" label="Surname" variant='outlined'
                                fullWidth required
                                onChange={(e) => setSurname(e.target.value)}
                                value={surname} />
                        </Grid>
                        <Grid item xs={12}>
                            <Select
                                hideSelectedOptions={false}
                                id="position"
                                label="Position"
                                variant="outlined"
                                fullWidth
                                required
                                options={positions}
                                value={p}
                                onChange={(selected) => setP(selected)}
                                getOptionLabel={(position) => position.name}
                                getOptionValue={(position) => position.pid}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="salary" label="Salary" variant='outlined'
                                fullWidth required
                                onChange={(e) => setSalary(e.target.value)}
                                value={salary} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="phone" label="Phone" variant='outlined'
                                fullWidth required
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone} />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>Update</Button>
                        </Grid>
                    </Grid>

                </form>

            </Container>
        </React.Fragment>
    );
}