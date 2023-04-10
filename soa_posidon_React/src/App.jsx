import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Visit from './pages/visitPage/Visit'
import CreateVisit from "./pages/visitPage/createVisit";
import UpdateVisit from "./pages/visitPage/updateVisit";
import Recreation from "./pages/recreationPage/Recreation";
import UpdateRecreation from "./pages/recreationPage/update";
import CreateRecreation from "./pages/recreationPage/createRecreation";
import Booking from "./pages/bookingPage/Booking";
import CreateBookingByGuest from "./pages/bookingPage/createBookingByGuest";
import CreateBookingByCounter from "./pages/bookingPage/createBookingByCounter";
import UpdateBooking from "./pages/bookingPage/updateBooking";
import PaymentBooking from "./pages/bookingPage/paymentBooking";
import Staff from "./pages/staffPage/Staff";
import CreateStaff from "./pages/staffPage/createStaff";
import UpdateStaff from "./pages/staffPage/updateStaff";
import StaffInFloor from "./pages/staffInFloorPage/StaffInFloor";
import CreateStaffInFloor from "./pages/staffInFloorPage/createStaffInFloor";
import Register from "./pages/Register"
import Login from './pages/Login'

import Supply from "./pages/supplyPage/Supply"
import SupplyRecord from "./pages/supplyrecordPage/supplyrecord"
import Guest from "./pages/guestPage/Guest"
import Rooms from "./pages/roomPage/Room"
import CreateSupply from "./pages/supplyPage/createSupply"
import UpdateSupply from "./pages/supplyPage/update"
import CreateSupplyRecord from "./pages/supplyrecordPage/createSupplyRecord"
import RecordHotelService from "./pages/recordServicePage/RecordHotelService";
import HotelService from "./pages/hotelServicePage/HotelService";
import UpdateHotelService from "./pages/hotelServicePage/Update";
import UpdateRoom from "./pages/roomPage/update"
import CreateHotelService from "./pages/hotelServicePage/Create";
import CreateRecSer from "./pages/recordServicePage/Create";
import UpdateRecSer from "./pages/recordServicePage/Update";
import GuestHotelRecSer from "./pages/recordServicePage/GuestRecordHotel";
import GuestCreateHotelRec from "./pages/recordServicePage/GuestCreate";
import GuestUpdateHotelRec from "./pages/recordServicePage/GuestUpdate";

import { Room } from "@mui/icons-material";


function App() {

  return (
    <div>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />


        <Route path="visits" element={<Visit />} />
        <Route path="visit/update/id/:id" element={<UpdateVisit />} />
        <Route path="visit/create" element={<CreateVisit />} />

        <Route path="bookings" element={<Booking />} />
        <Route path="bookings/create/guest" element={<CreateBookingByGuest />} />
        <Route path="bookings/create/counter" element={<CreateBookingByCounter />} />
        <Route path="bookings/update/id/:id" element={<UpdateBooking />} />
        <Route path="bookings/payment/:id" element={<PaymentBooking />} />

        <Route path="staffs" element={<Staff />} />
        <Route path="staffs/create" element={<CreateStaff />} />
        <Route path="staffs/update/id/:id" element={<UpdateStaff />} />

        <Route path="staffsinfloors" element={<StaffInFloor />} />
        <Route path="staffsinfloors/create" element={<CreateStaffInFloor />} />

        <Route path="recreations" element={<Recreation />} />
        <Route path="recreation/create" element={<CreateRecreation />} />
        <Route path="recreation/update/id/:id" element={<UpdateRecreation />} />

        <Route path="supplies" element={<Supply />} />
        <Route path="supplies/create" element={<CreateSupply />} />
        <Route path="supplies/update/id/:id" element={<UpdateSupply />} />

        <Route path="supplyrecords" element={<SupplyRecord />} />
        <Route path="supplyrecords/create" element={<CreateSupplyRecord />} />

        <Route path="guests" element={<Guest />} />


        <Route path='hotel/services/records' element={<RecordHotelService/>} />
        <Route path='hotel/services/records/create' element={<CreateRecSer/>} />
        <Route path='hotel/services/record/update/id/:id' element={<UpdateRecSer/>} />

        <Route path='hotel/services' element={<HotelService/>} />
        <Route path='hotel/services/update/id/:id' element={<UpdateHotelService/>} />

        <Route path='records/hotel/services/' element={<GuestHotelRecSer/>} /> 
        <Route path='records/hotel/services/update/id/:id' element={<GuestUpdateHotelRec/>} /> 
        <Route path='records/hotel/services/create' element={<GuestCreateHotelRec/>} /> 

        <Route path='hotel/services/create' element={<CreateHotelService/>} /> 

        <Route path="rooms" element={<Rooms/>} />
        <Route path="rooms/update/id/:id" element={<UpdateRoom/>} />
        
      </Routes>

    </div>

  )
}

export default App
