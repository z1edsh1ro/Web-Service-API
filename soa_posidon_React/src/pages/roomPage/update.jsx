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
    const [floors, setFloor] = useState([]);
    const [roomtypes, setRoomtype] = useState([]);
    const [statuses, setStatus] = useState([])
    const [f, setF] = useState({});
    const [r, setR] = useState({});
    const [s, setS] = useState({})

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/rooms/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                setFloor(result.floor);
                setRoomtype(result.roomtype);
                setStatus(result.status);
            })
            .catch(error => console.log('error', error));
        }, [id])

        useEffect(() => {
            fetch("http://localhost:8080/api/roomtypes")
                .then(res => res.json())
                .then(
                    (result) => {
                        setR(result)
                        console.log(result);
                    }
                )
        }, [])

        useEffect(() => {
            fetch("http://localhost:8080/api/statusrooms")
                .then(res => res.json())
                .then(
                    (result) => {
                        setS(result)
                        console.log(result);
                    }
                )
        }, [])

        useEffect(() => {
            fetch("http://localhost:8080/api/floors")
                .then(res => res.json())
                .then(
                    (result) => {
                        setF(result)
                        console.log(result);
                    }
                )
        }, [])

    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // console.log(floors.fid,roomtypes.rtId,statuses.statusId)
        
        var raw = JSON.stringify({
            "floor":{
                "fid":floors.fid,
                "name":floors.name
            },
            "roomtype":{
                "rtId":roomtypes.rtId,
                "name":floors.name,
                "pricePerDay":floors.pricePerDay
            },
            "status":{
                "statusId":statuses.statusId,
                "name":statuses.name,
                "forWhat":statuses.forWhat
            },
        });
        console.log(raw)
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/rooms/id/"+id, requestOptions)
        .then(response => response.text())
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'เพิ่มข้อมูลพนักงานออกสำเร็จ'
                })
                navigate('/rooms')
                // console.log(result)
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
                    อัปเดตห้อง
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
                                options={f}
                                value={floors}
                                onChange={(selected) => setFloor(selected)}
                                getOptionLabel={(floor) => floor.name}
                                getOptionValue={(floor) => floor.fid}
                            />
                    </Grid>
                    <Grid item xs={12}>
                            <Select
                                hideSelectedOptions={false}
                                id="room"
                                label="Room"
                                variant="outlined"
                                fullWidth
                                required
                                options={r}
                                value={roomtypes}
                                onChange={(selected) => setRoomtype(selected)}
                                getOptionLabel={(roomtype) => roomtype.name+" ("+roomtype.pricePerDay+")"}
                                getOptionValue={(roomtype) => roomtype.rtId}
                            />
                    </Grid>
                    <Grid item xs={12}>
                            <Select
                                hideSelectedOptions={false}
                                id="status"
                                label="Status"
                                variant="outlined"
                                fullWidth
                                required
                                options={s}
                                value={statuses}
                                onChange={(selected) => setStatus(selected)}
                                getOptionLabel={(status) => status.name}
                                getOptionValue={(status) => status.statusId}
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