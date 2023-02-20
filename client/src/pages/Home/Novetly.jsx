import { t } from 'i18next';
import React from 'react'
import { useSelector } from 'react-redux'
import { useAction } from '../../hooks/useAction';

const Novetly = ({ novetly }) => {
    const { is_admin } = useSelector(state => state.user)
    const { language } = useSelector(state => state.language);
    const { DelNovetly } = useAction()
    return (
        <div className="home__novetly__main_">
            <div className="home__novetly_">
                <div className="home__novetly__img">
                    <img src={process.env.REACT_APP_API_URL+"bolgary.png"}/>
                </div>
                <div className="info__for__img">
                    <div className="home__novetly__title__with__description">
                        <div className="home__novetly__title">
                            Bulgaria
                        </div>
                        <div className="home__novetly__description">
                            <img src={process.env.REACT_APP_API_URL+"20382.png"}/>
                            &nbsp; Varna, Sofia
                        </div>
                    </div>
                    <div className="home__novetly__price">
                        {t("home.from")} 2200 грн
                    </div>
                </div>
            </div>
            <div className="home__novetly_">
                <div className="home__novetly__img">
                    <img src={process.env.REACT_APP_API_URL+"tyrchia.png"}/>
                </div>
                <div className="info__for__img">
                    <div className="home__novetly__title__with__description">
                        <div className="home__novetly__title">
                            Turkey
                        </div>
                        <div className="home__novetly__description">
                            <img src={process.env.REACT_APP_API_URL+"20382.png"}/>
                            &nbsp; Istanbul, Antalya
                        </div>
                    </div>
                    <div className="home__novetly__price">
                        {t("home.from")} 2500 грн
                    </div>
                </div>
            </div>
            <div className="home__novetly_">
                <div className="home__novetly__img">
                    <img src={process.env.REACT_APP_API_URL+"nimech.png"}/>
                </div>
                <div className="info__for__img">
                    <div className="home__novetly__title__with__description">
                        <div className="home__novetly__title">
                            Germany
                        </div>
                        <div className="home__novetly__description">
                            <img src={process.env.REACT_APP_API_URL+"20382.png"}/>
                            &nbsp; Berlin
                        </div>
                    </div>
                    <div className="home__novetly__price">
                        {t("home.from")} 3000 грн
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Novetly