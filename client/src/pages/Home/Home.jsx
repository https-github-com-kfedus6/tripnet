import React from 'react';
import FlightsFormSort from '../../components/FlightsFormSort';
import "./home.css";
import HomeListFAQ from './HomeListFAQ';
import ListNovetly from './ListNovetly';

const Home = () => {
    return (
        <div className="home__main">
            <FlightsFormSort/>
            <ListNovetly/>
            <HomeListFAQ/>
        </div>
    )
}

//<FlightsFormSort/>
export default Home;