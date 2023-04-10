import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from '../styles/home.module.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Home() {
    return (


        <div className={styles.bg}>
            <div className={styles.main}>
                <div className={styles.l}>
                    <h1>User</h1>
                    <Link to="/bookings/create/guest">
                        <Button variant="contained">จองห้อง</Button>
                    </Link>
                    <Link to="/visit/create">
                        <Button variant="contained">การบริการสันทนาการ</Button>
                    </Link>
                    <Link to="/records/hotel/services/create">
                        <Button variant="contained">รีวิวบริการโรงแรม</Button>
                    </Link>
                    <Link to="/records/hotel/services">
                        <Button variant="contained">ประวัติรีวิวบริการโรงแรม</Button>
                    </Link>

                </div>
                <div className={styles.r}>
                    <h1>Admin</h1>
                    <Link to="/bookings">
                        <Button variant="contained">จัดการการจอง</Button>
                    </Link>
                    <Link to="/staffs">
                        <Button variant="contained">จัดการพนักงาน</Button>
                    </Link>
                    <Link to="/staffsinfloors">
                        <Button variant="contained">จัดการหน้าที่พนักงาน</Button>
                    </Link>
                    <Link to="/visits">
                        <Button variant="contained">การบริการสันทนาการ</Button>
                    </Link>
                    <Link to="/rooms">
                        <Button variant="contained">จัดการห้องในโรงแรม</Button>
                    </Link>
                    <Link to="/recreations">
                        <Button variant="contained">สันทนาการ</Button>
                    </Link>
                    <Link to="/supplies">
                        <Button variant="contained">สินค้าในคลัง</Button>
                    </Link>
                    <br></br>
                    <Link to="/supplyrecords">
                        <Button variant="contained">การสั่งซื้อของจากโรงแรม</Button>
                    </Link>
                    <Link to="/hotel/services">
                        <Button variant="contained">บริการโรงแรม</Button>
                    </Link>
                    <Link to="/hotel/services/records">
                        <Button variant="contained">บันทึกบริการโรงแรม</Button>
                    </Link>
                </div>
            </div>

        </div>


    )
}


export default Home