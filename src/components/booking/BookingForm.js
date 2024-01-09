import React, { useState } from 'react';

const BookingForm = (props) => {
    const [occasion, setOccasion] = useState("No");
    const [date, setDate] = useState((new Date()).toString());
    const [time, setTime] = useState(null);
    const [numGuests, setNumGuests] = useState(1);

    const occasionChanged = (e) => { setOccasion(e?.target.value); }
    const dateChanged = (e) => {
        setDate(e?.target.value);
        console.log('date', e?.target.value, typeof(e?.target.value));
        props.availableTimesDispatcher(e?.target.value);
    }
    const timeChanged = (e) => { setTime(e?.target.value); }
    const numGuestsChanged = (e) => { setNumGuests(e?.target.value); }

    const handleSumbit = (e) => {
        e.preventDefault();
        props.submitBooking({
            occasion: occasion,
            date: date,
            time: time,
            numGuests: numGuests
        })
    }

    const occasions = ["No", "Birthday", "Anniversery"].map(
        (item, index) => <option key={index}>{item}</option>);

    return (
        <form onSubmit={handleSumbit} className='llform'>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"
                   id="res-date"
                   name="res-date"
                   value={date}
                   onChange={dateChanged}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="res-time" onChange={timeChanged} value={time}>
                { props.availableTimes?.map((item, index) => <option key={index}>{item}</option>) }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder='1' min="1" max="10"
                   id="guests" name="guests"
                   value={numGuests} onChange={numGuestsChanged}
            />
            <label htmlFor="occasion">Occasion</label>
            <select type="text" id="occasion" name="occasion"
                    value={occasion} onChange={occasionChanged}>
                {occasions}
            </select>
            <label />
            <button className='llform-button' type="submit">Make reservation</button>
        </form>
    );
}

export default BookingForm;
