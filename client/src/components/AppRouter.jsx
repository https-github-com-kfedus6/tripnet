import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home/Home';
import Flights from '../pages/Flights/Flights.jsx'
import Flight from '../pages/Flight/Flight';
import AboutUs from '../pages/AboutUs/AboutUs';
import { useEffect } from 'react';
import { useAction } from '../hooks/useAction';
import TinyMCE from './TinyMCE/TinyMCE';
import AdminMain from '../pages/Admin/AdminMain';
import { useSelector } from 'react-redux';
import { ListBlog } from '../pages/Blog/ListBlog';
import Blog from '../pages/Blog/Blog';
import FAQ from '../pages/FAQ/FAQ';
import Account from '../pages/Account/Account';
import FlightOrders from '../pages/FlightOrders/FlightOrders';

const AppRouter = () => {
    const { IsAuthorize } = useAction();
    const { is_login, is_admin } = useSelector(state => state.user);

    useEffect(() => {
        IsAuthorize();
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                {/*<Route path='flights' element={<Flights isShowFilter={false} />} />*/}
                <Route path='flightsCategory' element={<Flights isShowFilter={true} />} />
                <Route path='flight/:id' element={<Flight />} />
                <Route path='FAQ' element={<FAQ />} />
                <Route path='aboutUs' element={<AboutUs />} />
                <Route path='tinyMCE' element={<TinyMCE />} />
                <Route path='blog' element={<ListBlog />} />
                <Route path='blog/:id' element={<Blog />} />
                {is_admin ? <Route path='order' element={<FlightOrders />} /> : <></>}
                {is_admin ? <Route path='admin' element={<AdminMain />} /> : <></>}
                {is_login ? <Route path='account' element={<Account />} /> : <></>}
                <Route path='*' element={<div>error</div>} />
            </Route>
        </Routes>
    )
}

export default AppRouter;