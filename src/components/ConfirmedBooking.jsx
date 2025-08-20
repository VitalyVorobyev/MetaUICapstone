import { useState, useEffect } from "react";

const ConfirmedBooking = (props) => {
    const [guests, setGuests] = useState("guests");

    useEffect(() => {
        if (props.data?.numGuests) {
            if (props.data?.numGuests === 1) {
                setGuests("guest");
            } else {
                setGuests("guests");
            }
        }
    }, [props.data?.numGuests]);

    return (
        <main>
        <h1 className="booking-detail-header">
            {props.success ? 'Booking confirmed' : 'Cant make reservation'}
        </h1>
        <section className="booking-detail">
            <div>{props.data?.date}, {props.data?.time}</div>
            <div>{props.data?.numGuests} {guests}</div>
            { props.data?.occasion && props.data?.occasion !== "No" ?
                <div>{props.data?.occasion}</div> : <></>
            }
        </section>
        </main>
    )
};

export default ConfirmedBooking;
