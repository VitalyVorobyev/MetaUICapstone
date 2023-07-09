import Header from "./Header";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

import { useState, useEffect, useReducer } from "react";
import { fetchAPI } from './bookapi'

export const updateTimes = (times, date) => {
    return fetchAPI(date);
}
export const initializeTimes = (date) => fetchAPI(date);

const BookingPage = (props) => {
    const [newBooking, setNewBooking] = useState(null);
    const [bookingList, setBookingList] = useState([]);
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        updateTimes, [], initializeTimes);

    useEffect(() => {
        setBookingList(bookingList => [...bookingList, newBooking]);
    }, [newBooking]);

    return (
        <>
        <main>
            <BookingForm
                submitBooking={setNewBooking}
                availableTimesDispatcher={dispatchAvailableTimes}
                availableTimes={availableTimes}
            />
        </main>
        </>
    )
}

export default BookingPage;
