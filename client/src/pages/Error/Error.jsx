import { t } from 'i18next'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import '../Error/error.css'

const Error = () => {
    const navigate = useNavigate()
    const {language}=useSelector(state=>state.language);
    return (
        <div className='container-error'>
            <div className='block-error'>
                <div className='item-error-img'>
                    <img src={process.env.REACT_APP_API_URL + 'error.png'} alt="error" />
                </div>
                <div className='item-error-message'>
                    <h1>{t("error.title")}</h1>
                    <h2>{t("error.error_code_404")}</h2>
                    <div>
                        <p>{t("error.here_are_some_useful_links")}</p>
                        <p className='item-error-navigate' onClick={() => navigate('/')}>{t("header.first_link")}</p>
                        <p className='item-error-navigate' onClick={() => navigate('/flightsCategory')}>{t("header.third_link")}</p>
                        <p className='item-error-navigate' onClick={() => navigate('/services')}>{t("header.six_link")}</p>
                        <p className='item-error-navigate' onClick={() => navigate('/blog')}>{t("header.five_link")}</p>
                        <p className='item-error-navigate' onClick={() => navigate('/contacts')}>{t("header.fourth_link")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error