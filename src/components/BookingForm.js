import React, { useState, useEffect } from 'react';

const BookingForm = (props) => {
    const [occation, setOccasion] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [numGuests, setNumGuests] = useState(1);
    const [availableTimes, setAvailableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);

    const occasionChanged = (value) => { setOccasion(value); }
    const dateChanged = (value) => { setDate(value); }
    const timeChanged = (value) => { setTime(value); }
    const numGuestsChanged = (value) => { setNumGuests(value); }

    const handleSumbit = () => {
        props.submitBooking({
            occation: occation,
            date: date,
            time: time,
            numGuests: numGuests
        })
        console.log("Date", date);
        console.log("Time", time);
        console.log("NumGuests", numGuests);
        console.log("Occasion", occation);
    }

    return (
        <form onSubmit={handleSumbit}>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="res-date" onChange={dateChanged}/>
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="res-time" onChange={timeChanged}>
                    { availableTimes.map((item) => <option>{item}</option>) }
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input type="number"
                       placeholder='1'
                       min="1"
                       max="10"
                       id="guests"
                       name="guests"
                       onChange={numGuestsChanged}
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select type="text" id="occasion" name="occasion" onChange={occasionChanged}>
                    <option>Birthday</option>
                    <option>Anniversery</option>
                </select>
            </div>
            <button type="submit">Make Your reservation</button>
        </form>
    );
}

export default BookingForm;
