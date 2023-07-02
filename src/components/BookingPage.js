import Header from "./Header";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

import { useState, useEffect, useReducer } from "react";

export const updateTimes = (times, date) => { return times; }
export const initializeTimes = () => [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

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
        <Header />
        <main>
            <BookingForm
                submitBooking={setNewBooking}
                availableTimesDispatcher={dispatchAvailableTimes}
                availableTimes={availableTimes}
            />
        </main>
        <Footer />
        </>
    )
}

export default BookingPage;
