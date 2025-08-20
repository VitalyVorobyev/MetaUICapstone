import { render, screen, } from "@testing-library/react";
import BookingPage from "./BookingPage";

test('Renders choose date', () => {
    render(<BookingPage/>);
    const label = screen.getByText("Choose date");
    expect(label).toBeInTheDocument();
});

