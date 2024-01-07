import { initializeTimes, updateTimes } from "../App";

test('Renders choose date', () => {
    const initTimes = initializeTimes(null);
    expect(initTimes).toEqual([]);
    const updatedTimes = updateTimes(initTimes, null);
    expect(updatedTimes).toEqual(initTimes);
});
