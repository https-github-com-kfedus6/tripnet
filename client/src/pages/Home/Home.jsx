import { t } from 'i18next';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FlightsFormSort from '../../components/FlightsFormSort';
import BlogTest from './BlogTest';
import HomeListBlog from './HomeListBlog';
import ListNovetly from './ListNovetly';
import Responce from './Responce';

const Home = () => {
    const { language } = useSelector(state => state.language);
    const [startPosition, setStartPosition] = useState('');
    const [finishPosition, setFinishPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const [sumYoung, setSumYoung] = useState(0)
    const [sumOld, setSumOld] = useState(1)
    return (
        <div className="home__main">
            <FlightsFormSort
                setStartDate={setStartDate}
                setStartPosition={setStartPosition}
                setFinishPosition={setFinishPosition}
                sortFlights={() => { navigate("/flights") }}
                sumOld={sumOld}
                setSumOld={setSumOld}
                sumYoung={sumYoung}
                setSumYoung={setSumYoung}
                deleteFlight={() => { }}
                limit={limit}
                page={page} />
            <div className='home__content'>
                <ListNovetly />
                <h3 className='home__benefits__company__name'>{t("home.benefits_company")}</h3>
                <div className="home__benefits__img">
                    <img src={process.env.REACT_APP_API_URL + "homeBenefits" + language + ".png"} />
                </div>
                <Responce />
                <HomeListBlog />
                <BlogTest />
            </div>
        </div>
    )
}

//<FlightsFormSort/>
export default Home;