import { useEffect } from "react";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    useEffect(() => { props.setActivenav(3); }, []);

    return (
        <main>
            <h1 className="booking-detail-header">Table reservation</h1>
            <BookingForm {...props}/>
        </main>
    )
}

export default BookingPage;
