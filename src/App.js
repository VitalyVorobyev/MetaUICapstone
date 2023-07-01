import './App.css';
import { useRoutes } from "react-router-dom";
import HomePage from './components/Homepage';
import BookingPage from './components/BookingPage';

// impo rt Main from './components/Main'

function App() {
  const elements = useRoutes([
    { path: "/", element: <HomePage/> },
    { path: "/booking", element: <BookingPage/>}
  ]);
  return elements;
}

export default App;
