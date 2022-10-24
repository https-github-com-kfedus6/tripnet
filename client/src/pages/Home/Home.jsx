import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FlightsFormSort from '../../components/FlightsFormSort';
import { useAction } from '../../hooks/useAction';
import CompanyBenefits from './CompanyBenefits';
import HomeFAQ from './HomeFAQ';
import HomeListBlog from './HomeListBlog';
import ListNovetly from './ListNovetly';
import Responce from './Responce';
import Header from '../../components/Header';
import ReserveFlightHome from './ReserveFlightHome';
import ServicesHome from './ServicesHome';

const Home = () => {
    const { language } = useSelector(state => state.language);
    const [startPosition, setStartPosition] = useState('');
    const [finishPosition, setFinishPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [sumYoung, setSumYoung] = useState(0);
    const [sumOld, setSumOld] = useState(1);
    const [changePosition, setChangePosition] = useState(false);
    const { SetFlightParams } = useAction();
    useEffect(() => {

    }, [language])
    const navigate = useNavigate();
    const search = () => {
        SetFlightParams(startPosition, finishPosition, startDate, sumOld, sumYoung);
        navigate("/flightsCategory");
    }

    return (
        <>
            <div className='header-baner'>
                <div className='text-baner'>
                    <span>{t('baner.text')}</span>
                </div>
            </div>
            <div />
            <div className='form-flights-container'>
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
                    finishPosition={finishPosition}
                    changePosition={changePosition}
                    setChangePosition={setChangePosition} />
            </div>
            <ReserveFlightHome />
            <ServicesHome />
            <HomeListBlog />
        </>
    )
}

//<FlightsFormSort/>
export default Home;

/*<div className='home__content'>
    <ListNovetly />
    <CompanyBenefits />
    <HomeFAQ />
    <Responce />

</div>*/