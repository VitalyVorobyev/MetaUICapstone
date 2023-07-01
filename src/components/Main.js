import { Routes, Route } from "react-router-dom";

import HomePage from "./Homepage";
import BookingPage from "./BookingPage";

const Main = (props) => {
    return (
        <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
        </main>
    )
}

export default Main;
