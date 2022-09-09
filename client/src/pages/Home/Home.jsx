import { t } from 'i18next';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FlightsFormSort from '../../components/FlightsFormSort';
import { useAction } from '../../hooks/useAction';
import HomeFAQ from './HomeFAQ';
import HomeListBlog from './HomeListBlog';
import ListNovetly from './ListNovetly';
import Responce from './Responce';

const Home = () => {
    const { language } = useSelector(state => state.language);
    const [startPosition, setStartPosition] = useState('');
    const [finishPosition, setFinishPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [sumYoung, setSumYoung] = useState(0);
    const [sumOld, setSumOld] = useState(1);

    const {SetFlightParams}=useAction();

    const navigate = useNavigate();
    const search=()=>{
        SetFlightParams(startPosition,finishPosition,startDate,sumOld,sumYoung);
        navigate("/flightsCategory");
    }
    return (
        <div className="home__main">
            <FlightsFormSort
                setStartDate={setStartDate}
                setStartPosition={setStartPosition}
                setFinishPosition={setFinishPosition}
                sortFlights={search}
                sumOld={sumOld}
                setSumOld={setSumOld}
                sumYoung={sumYoung}
                setSumYoung={setSumYoung}
                deleteFlight={() => { }}
                startDate={startDate}
                startPosition={startPosition}
                finishPosition={finishPosition} />
            <div className='home__content'>
                <ListNovetly />
                <h3 className='home__benefits__company__name'>{t("home.benefits_company")}</h3>
                <div className="home__benefits__img">
                    <img src={process.env.REACT_APP_API_URL + "homeBenefits" + language + ".png"} />
                </div>
                <div className="home__benefits__img__mini">
                    <img src={process.env.REACT_APP_API_URL + "homeBenefitsmini" + language + ".png"} />
                </div>
                <HomeFAQ/>
                <Responce />
                <HomeListBlog />
            </div>
        </div>
    )
}

//<FlightsFormSort/>
export default Home;