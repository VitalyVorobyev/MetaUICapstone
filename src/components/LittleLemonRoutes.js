import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";

const LittleLemonRoutes = (props) => {
    return (
        <Routes>
            <Route path='/' element={<HomePage {...props}/>} />
            <Route path='/booking' element={<BookingPage {...props}/>} />
        </Routes>
    );
};

export default LittleLemonRoutes;
