import './App.css';

import { useReducer } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import LittleLemonRoutes from './components/LittleLemonRoutes';

import { fetchAPI } from './components/BookAPI';

const updateTimes = (times, date) => {
  return fetchAPI(date);
}
const initializeTimes = (date) => fetchAPI(date);

const App = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, null, initializeTimes);

  return (
    <>
    <Header/>
    <LittleLemonRoutes
      availableTimesDispatcher={dispatchAvailableTimes}
      availableTimes={availableTimes}
    />
    <Footer/>
    </>
  )
}

export default App;
