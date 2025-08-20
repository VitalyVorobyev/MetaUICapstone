import { initializeTimes, updateTimes } from "../App";

test('Renders choose date', () => {
    const initTimes = initializeTimes(null);
    expect(initTimes.length === 0).toEqual(false);
    const updatedTimes = updateTimes(initTimes, null);
    expect(updatedTimes.length === 0).toEqual(true);
});
