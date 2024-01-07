import BookingForm from "./BookingForm";

import { useState, useEffect } from "react";

const BookingPage = (props) => {
    const [newBooking, setNewBooking] = useState(null);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        if (newBooking) {
            setBookingList([...bookingList, newBooking]);
        }
    }, [newBooking]);

    return (
        <main>
            <BookingForm {...props} submitBooking={setNewBooking}/>
        </main>
    )
}

export default BookingPage;
