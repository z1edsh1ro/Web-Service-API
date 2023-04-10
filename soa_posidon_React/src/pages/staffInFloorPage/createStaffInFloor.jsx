import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography, Button } from '@mui/material';
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

export default function CreateStaffInFloor() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const [s, setS] = useState({});
    const [staffs, setStaffs] = useState([]);
    const [f, setF] = useState({});
    const [floors, setFloors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/staffs")
            .then(res => res.json())
            .then(
                (result) => {
                    setStaffs(result)
                    console.log(result);
                }
            )
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/api/floors")
            .then(res => res.json())
            .then(
                (result) => {
                    setFloors(result)
                    console.log(result);
                }
            )
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "floor": f,
            "staff": s,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/staffsinfloors", requestOptions)
            .then(response => response.text())
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'เพิ่มข้อมูลหน้าที่ประจำของพนักงานออกสำเร็จ'
                })
                navigate('/staffsinfloors')
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
                    เพิ่มหน้าที่ประจำของพนักงาน
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Select
                                hideSelectedOptions={false}
                                id="floor"
                                label="Floor"
                                variant="outlined"
                                fullWidth
                                required
                                options={floors}
                                onChange={(selected) => setF(selected)}
                                getOptionLabel={(floor) => floor.name}
                                getOptionValue={(floor) => floor.rid}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Select
                                hideSelectedOptions={true}
                                id="staff"
                                label="Staff"
                                variant="outlined"
                                fullWidth
                                required
                                options={staffs}
                                onChange={(selected) => setS(selected)}
                                getOptionLabel={(staff) => staff.name + " " + staff.surname}
                                getOptionValue={(staff) => staff.sid}
                            />
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