import React from 'react';
import FlightsFormSort from '../../components/FlightsFormSort';
import "./home.css";
import ListNovetly from './ListNovetly';

const Home = () => {
    return (
        <div className="home__main">
            <FlightsFormSort/>
            <ListNovetly/>
        </div>
    )
}

//<FlightsFormSort/>
export default Home;