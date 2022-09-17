import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useAction } from '../hooks/useAction';
import { BsInstagram } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const { infoCompany } = useSelector(state => state.infoCompany);
    const { language } = useSelector(state => state.language);
    const { GetInfoCompany } = useAction();

    useEffect(() => {
        if (infoCompany == undefined) {
            GetInfoCompany();
        }
    }, [])

    return (
        infoCompany == undefined ? <div>...loading</div> :
            <div className='footer-main'>
                <div className='footer-logo'>
                    <img src={process.env.REACT_APP_API_URL + 'logo.png'} alt="logo" />
                </div>
                <div className='footer-block'>
                    <div className='footer-link'>
                        <p onClick={() => navigate('/flightsCategory')}>{t('header.third_link')}</p>
                        <p onClick={() => navigate('/blog')}>{t("header.five_link")}</p>
                        <p onClick={() => navigate('/FAQ')}>{t("FAQ.questions_and_answers")}</p>
                        <p onClick={() => navigate('/aboutUs')}>{t('header.fourth_link')}</p>
                    </div>
                    <div className='footer-info'>
                        <p>{infoCompany.name}</p>
                        <p>{infoCompany.email}</p>
                        <p>{infoCompany.telephone}</p>
                        <p>{infoCompany.address[language]}</p>
                        <p>{infoCompany.openingHours[language]}</p>
                    </div>
                    <div className='footer-instagram'>
                        <p>{t('footer.social')}</p>
                        <div>
                            <a href='https://www.instagram.com/tripnet.com.ua/'><BsInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className='footer-protected'>
                    <span>{t('footer.protected')}.</span>
                </div>
            </div>
    )
}

export default Footer