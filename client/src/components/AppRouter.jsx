import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home/Home';
import Flights from '../pages/Flights';
import FlightsCategory from '../pages/FlightsCategory';
import Flight from '../pages/Flight';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='flights' element={<Flights />} />
                <Route path='flightsCategory' element={<FlightsCategory />} />
                <Route path='flight' element={<Flight />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;