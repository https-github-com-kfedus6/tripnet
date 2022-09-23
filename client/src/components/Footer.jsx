import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useAction } from '../hooks/useAction';
import { BsInstagram } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { GiSmartphone, GiPositionMarker } from 'react-icons/gi'
import { HiOutlineMail } from 'react-icons/hi'
import { useTranslation } from 'react-i18next';
import { AiOutlineFacebook } from 'react-icons/ai'

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
                <div className='footer-logo logo-none' onClick={() => navigate("/")}>
                    <img src={process.env.REACT_APP_API_URL + 'logo-green.png'} alt="logo" />
                </div>
                <div className='footer-block'>
                    <div className='footer-logo logo-none-second' onClick={() => navigate("/")}>
                        <img src={process.env.REACT_APP_API_URL + 'logo-green.png'} alt="logo" />
                        <span className='protected-none'>{t('footer.protected')}.</span>
                    </div>
                    <div className='footer-link'>
                        <p onClick={() => navigate('/flightsCategory')}>{t('header.third_link')}</p>
                        <p onClick={() => navigate('/blog')}>{t("header.five_link")}</p>
                        <p onClick={() => navigate('/FAQ')}>{t("FAQ.questions_and_answers")}</p>
                        <p onClick={() => navigate('/aboutUs')}>{t('header.fourth_link')}</p>
                    </div>
                    <div className='footer-info'>
                        <div>
                            <i><HiOutlineMail /></i>
                            <p>{infoCompany.email}</p>
                        </div>
                        <div>
                            <i><GiSmartphone /></i>
                            <p>{infoCompany.telephone}</p>
                        </div>
                        <div>
                            <i><GiPositionMarker /></i>
                            <p>{infoCompany.address[language]}</p>
                        </div>
                        <div>
                            <i><BiTimeFive /></i>
                            <p>{infoCompany.openingHours[language]}</p>
                        </div>
                    </div>
                    <div className='footer-social'>
                        <p>{t('footer.social')}</p>
                        <div className='footer-icon-social'>
                            <div>
                                <a target="_blank" href='https://www.instagram.com/tripnet.com.ua/'><BsInstagram /></a>
                            </div>
                            <div>
                                <a target="_blank" href="https://m.facebook.com/TripNET.com.ua/"><AiOutlineFacebook /></a>
                            </div>
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