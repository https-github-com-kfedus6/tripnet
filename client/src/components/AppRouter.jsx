import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home/Home';
import Flights from '../pages/Flights/Flights.jsx'
import FlightsCategory from '../pages/FlightsCategory';
import Flight from '../pages/Flight';
import AboutUs from '../pages/AboutUs/AboutUs';
import FormBuy from '../components/FormBuy';
import { useEffect } from 'react';
import { useAction } from '../hooks/useAction';

const AppRouter = () => {
    const {IsAuthorize}=useAction();
    useEffect(()=>{
        IsAuthorize();
    },[])
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='flights' element={<Flights />} />
                <Route path='flightsCategory' element={<FlightsCategory />} />
                <Route path='flight/:id' element={<Flight />} />
                <Route path='formBuy' element={<FormBuy />} />
                <Route path='aboutUs' element={<AboutUs />} />
                <Route path='*' element={<div>error</div>} />
            </Route>
        </Routes>
    )
}

export default AppRouter;