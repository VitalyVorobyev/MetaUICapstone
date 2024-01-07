import { useState, useEffect } from "react";
import { submitAPI } from './BookAPI';
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    const [newBooking, setNewBooking] = useState(null);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        console.log('new booking', newBooking);
        if (newBooking) {
            submitAPI(newBooking);
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
