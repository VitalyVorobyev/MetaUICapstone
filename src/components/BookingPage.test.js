import {updateTimes, initializeTimes} from "./BookingPage";

test('Renders choose date', () => {
    const initTimes = initializeTimes();
    expect(initTimes).toEqual([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);
    const updatedTimes = updateTimes(initTimes, "01.01.2023");
    expect(updatedTimes).toEqual(initTimes);
})
