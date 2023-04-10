import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { useParams } from "react-router-dom";

export default function CreateBookingByGuest() {
    const { id } = useParams();
    const [type, setType] = useState({});
    const [diff, setDiff] = useState({});
    const [services, setServices] = useState([]);
    const [supplies, setSupplies] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://localhost:8080/api/bookings/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                fetch("http://localhost:8080/api/rooms/type/" + result.room?.rid, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        setType(result)
                    })
                    .catch(error => console.log('error', error))
            })
            .catch(error => console.log('error', error));
        fetch("http://localhost:8080/api/bookings/diffday/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                setDiff(result)
            })
            .catch(error => console.log('error', error))
    }, [id])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://localhost:8080/api/records/bookings/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setServices(result)
            })
            .catch(error => console.log('error', error));
    }, [id])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://localhost:8080/api/supplyrecords/bookings/id/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setSupplies(result)
            })
            .catch(error => console.log('error', error));
    }, [id])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ p: 2 }}>
                <Box display="flex">
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                            ข้อมูลบิล
                        </Typography>
                    </Box>
                    <Box>
                        <Link href="/bookings">
                            <Button variant="contained">กลับ</Button>
                        </Link>
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">รายการ</TableCell>
                                <TableCell align="center">จำนวน</TableCell>
                                <TableCell align="center">ราคา</TableCell>
                                <TableCell align="center">ราคารวม</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{type.name}</TableCell>
                                <TableCell align="center">{diff ? diff.toString() : ''} วัน</TableCell>
                                <TableCell align="center">{type.pricePerDay ? type.pricePerDay.toString() : ''}</TableCell>
                                <TableCell align="center">{(diff * type.pricePerDay).toString()}</TableCell>
                            </TableRow>
                            {services.map((service) => (
                                <TableRow
                                    key={service.srId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{service.hotelservice.name}</TableCell>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">{service.hotelservice.price ? service.hotelservice.price.toString() : ''}</TableCell>
                                    <TableCell align="center">{service.hotelservice.price ? service.hotelservice.price.toString() : ''}</TableCell>
                                </TableRow>))}
                            {supplies.map((supply) => (
                                <TableRow
                                    key={supply.supRid}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{supply.supply.name}</TableCell>
                                    <TableCell align="center">{supply.quantity}</TableCell>
                                    <TableCell align="center">{supply.supply.price ? supply.supply.price.toString() : '0'}</TableCell>
                                    <TableCell align="center">{(supply.quantity * supply.supply.price).toString()}</TableCell>
                                </TableRow>))}
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">Calculater</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>
    );
}