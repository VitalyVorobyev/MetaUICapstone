import './App.css';

import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { submitAPI } from './components/BookAPI';

import Header from './components/Header';
import Footer from './components/Footer';
import LittleLemonRoutes from './components/LittleLemonRoutes';

import { fetchAPI } from './components/BookAPI';

export const updateTimes = (times, date) => {
  return fetchAPI(Date.parse(date));
}
export const initializeTimes = () => fetchAPI(new Date());

const App = () => {
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
        <Header/>
        <LittleLemonRoutes
          availableTimesDispatcher={dispatchAvailableTimes}
          availableTimes={availableTimes}
          submitBooking={setNewBooking}
          data={newBooking}
          success={bookingstatus}
        />
        <Footer/>
        </>
    );
}

export default App;
