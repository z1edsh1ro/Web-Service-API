import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

export default function CreateStaff() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [p, setP] = useState({});
    const [salary, setSalary] = useState('');
    const [phone, setPhone] = useState('');
    const [positions, setPositions] = useState([]);

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
            "name": name,
            "surname": surname,
            "position": p,
            "salary": salary,
            "phone": phone,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/staffs", requestOptions)
        .then(response => response.text())
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'เพิ่มข้อมูลพนักงานออกสำเร็จ'
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
                    รับสมัครพนักงาน
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="name" label="Name" variant='outlined'
                                fullWidth required
                                onChange={(e) => setName(e.target.value)}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="surname" label="Surname" variant='outlined'
                                fullWidth required
                                onChange={(e) => setSurname(e.target.value)}
                            />
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
                                onChange={(selected) => setP(selected)}
                                getOptionLabel={(position) => position.name}
                                getOptionValue={(position) => position.pid}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="salary" label="Salary" variant='outlined'
                                fullWidth required
                                onChange={(e) => setSalary(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="phone" label="Phone" variant='outlined'
                                fullWidth required
                                onChange={(e) => setPhone(e.target.value)} />
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