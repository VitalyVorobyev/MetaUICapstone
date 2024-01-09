

const ConfirmedBooking = (props) => {
    return (
        <main>
        <h1 className="booking-detail-header">
            {props.success ? 'Booking confirmed' : 'Cant make reservation'}
        </h1>
        <section className="booking-detail">
            <div>{props.data?.date}, {props.data?.time}</div>
            <div>{props.data?.numGuests} guests</div>
            <div>{props.data?.occasion}</div>
        </section>
        </main>
    )
};

export default ConfirmedBooking;
