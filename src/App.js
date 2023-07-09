import './App.css';
import { useRoutes } from "react-router-dom";
import HomePage from './components/Homepage';
import BookingPage from './components/BookingPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const elements = useRoutes([
    { path: "/", element: <HomePage/> },
    { path: "/booking", element: <BookingPage/>}
  ]);
  return (
    <>
    <Header/>
    {elements}
    <Footer/>
    </>
  )
}

export default App;
