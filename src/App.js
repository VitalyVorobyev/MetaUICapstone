import './App.css';

import { useReducer } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import LittleLemonRoutes from './components/LittleLemonRoutes';

import { fetchAPI } from './components/BookAPI';

export const updateTimes = (times, date) => {
  return fetchAPI(Date.parse(date));
}
export const initializeTimes = () => fetchAPI(new Date());

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
