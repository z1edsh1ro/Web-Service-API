import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";

export default function CreateSupplyRecord() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const [st, setSt] = useState({});
    const [s, setS] = useState({});
    const [b, setB] = useState({});
    const [staffs, setStaffs] = useState([]);
    const [supplies, setSupplies] = useState([]);
    const [quantity, setQuantity] = useState('');
    const [reason, setReason] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [books,setBooks]=useState('');

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
        fetch("http://localhost:8080/api/supplies")
            .then(res => res.json())
            .then(
                (result) => {
                    setSupplies(result)
                    console.log(result);
                }
            )
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/api/bookings")
            .then(res => res.json())
            .then(
                (result) => {
                    setBooks(result)
                    console.log(result);
                }
            )
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        console.log(s,st)
        myHeaders.append("Content-Type", "application/json");
        const formattedLastDate = lastDate.toISOString().split('T')[0];
        var raw = JSON.stringify({
            "staff":{
                "sid":s.sid
            },
            "supply":{
                "supId":st.supId
            },
            "booking":{
                "bid":b.bid
            },
            "time":formattedLastDate,
            "reason":reason,
            "quantity":quantity
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/supplyrecords", requestOptions)
            .then(response => response.text())
            .then(result => {
                MySwal.fire({
                    icon: 'success',
                    title: 'การทำงานเสร็จสิ้น',
                    text: 'เพิ่มข้อมูลหน้าที่ประจำของพนักงานออกสำเร็จ'
                })
                navigate('/supplyrecords')
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
                     บันทึกการสั่งซื้อของจากโรงแรม
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        staff
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
                        supply
                        <Select
                                hideSelectedOptions={false}
                                id="floor"
                                label="Floor"
                                variant="outlined"
                                fullWidth
                                required
                                options={supplies}
                                onChange={(selected) => setSt(selected)}
                                getOptionLabel={(supply) => supply.name}
                                getOptionValue={(supply) => supply.supId}
                            />
                        </Grid>   
                        
                        <Grid item xs={12}>
                        booking
                        <Select
                                hideSelectedOptions={false}
                                id="floor"
                                label="Floor"
                                variant="outlined"
                                fullWidth
                                required
                                options={books}
                                onChange={(selected) => setB(selected)}
                                getOptionLabel={(book) => book.guest.name+"  "+book.guest.surname+" ("+book.room.roomtype.name+" "+book.room.floor.name+")" }
                                getOptionValue={(book) => book.bid}
                            />
                        </Grid>   
                        
                        <Grid item xs={12}>
                            time
                            <DatePicker
                                hideSelectedOptions={false}
                                id="lastDate"
                                label="lastDate"
                                variant="outlined"
                                fullWidth
                                required
                                selected={lastDate}
                                onChange={date => setLastDate(date)}
                                minDate={new Date()}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            Reason
                            <TextField id="reason" variant='outlined'
                                fullWidth required
                                onChange={(e) => setReason(e.target.value)} />
                        </Grid>
                        
                        <Grid item xs={12}>
                            Quantity
                            <TextField id="quantity" variant='outlined'
                                fullWidth required
                                onChange={(e) => setQuantity(e.target.value)} />
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