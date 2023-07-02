

const Bookings = (props) => {
    return (
        props.bookings.map((item) => {
            return (
                <>
                    <p>{item.date}</p>
                    <p>{item.time}</p>
                </>
            )
        })
    )
};

export default Bookings;
