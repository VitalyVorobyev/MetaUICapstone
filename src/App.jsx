import './App.css';

import { useState, useEffect, useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import { submitAPI, fetchAPI } from './components/booking/bookapi';

import Header from './components/Header';
import Footer from './components/Footer';
import LittleLemonRoutes from './components/LittleLemonRoutes';

export const updateTimes = (times, date) => {
  return fetchAPI(date);
}
export const initializeTimes = () => fetchAPI(new Date());

const App = () => {
    const [activenav, setActivenav] = useState(0);
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, null, initializeTimes);
    const [newBooking, setNewBooking] = useState(null);
    const [bookingList, setBookingList] = useState([]);
    const [bookingstatus, setBookingstatus] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setBookingstatus(false);
        if (newBooking) {
            setBookingstatus(submitAPI(newBooking));
            setBookingList([...bookingList, newBooking]);
        }
    }, [newBooking]);

    useEffect(() => {
        if (bookingstatus) {
            navigate("/bookingconfirmation");
        }
    }, [bookingstatus]);

    return (
        <>
        <Header active={activenav}/>
        <LittleLemonRoutes
          availableTimesDispatcher={dispatchAvailableTimes}
          availableTimes={availableTimes}
          submitBooking={setNewBooking}
          data={newBooking}
          success={bookingstatus}
          setActivenav={setActivenav}
        />
        <Footer/>
        </>
    );
}

export default App;
