import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

const LittleLemonRoutes = (props) => {
    return (
        <Routes>
            <Route path='/' element={<HomePage {...props}/>} />
            <Route path='/booking' element={<BookingPage {...props}/>} />
            <Route path='/bookingconfirmation' element={<ConfirmedBooking {...props}/>} />
        </Routes>
    );
};

export default LittleLemonRoutes;
