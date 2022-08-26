import { t } from 'i18next';
import React from 'react';
import { useSelector } from 'react-redux';
import FlightsFormSort from '../../components/FlightsFormSort';
import HomeListBlog from './HomeListBlog';
import ListNovetly from './ListNovetly';
import Responce from './Responce';

const Home = () => {
    const {language}=useSelector(state=>state.language);
    return (
        <div className="home__main">
            <FlightsFormSort/>
            <ListNovetly/>
            <h3 className='home__benefits__company__name'>{t("home.benefits_company")}</h3>
            <div className="home__benefits__img">
                <img src={process.env.REACT_APP_API_URL+"homeBenefits"+language+".png"}/>
            </div>
            <Responce/>
            <HomeListBlog/>
        </div>
    )
}

//<FlightsFormSort/>
export default Home;