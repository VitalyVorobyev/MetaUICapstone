import Header from "./Header";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

import { useState, useEffect } from "react";

const BookingPage = (props) => {
    const [newBooking, setNewBooking] = useState(null);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        setBookingList(bookingList => [...bookingList, newBooking]);
    }, [newBooking]);

    return (
        <>
        <Header />
        <main>
            <BookingForm submitBooking={setNewBooking} />
        </main>
        <Footer />
        </>
    )
}

export default BookingPage;
