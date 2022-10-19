import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useAction } from '../hooks/useAction';
import { BsInstagram } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { useTranslation } from 'react-i18next';
import { AiOutlineFacebook } from 'react-icons/ai';
import { CgMail } from "react-icons/cg";
import { BiTime } from "react-icons/bi";

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
                    <img src={process.env.REACT_APP_API_URL + 'logo-white.png'} alt="logo" />
                </div>
                <div className='footer__component'>
                    <div className='footer-block'>
                        <div className='footer-logo logo-none-second' onClick={() => navigate("/")}>
                            <img src={process.env.REACT_APP_API_URL + 'logo-white2.png'} alt="logo" />
                            <span className='protected-none'>ⓒ 2022 TripNet. {t('footer.protected')}.</span>
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
                    
                    <div className='footer__section'>    
                        <p>{t("footer.company")}</p>
                        <div onClick={()=>navigate("/")}>{t("footer.main")}</div>
                        <div onClick={()=>navigate("/flightsCategory")}>{t("footer.flight")}</div>
                        <div onClick={()=>navigate("/service")}>{t("footer.services")}</div>
                        <div onClick={()=>navigate("/support")}>{t("footer.support")}</div>
                        <div onClick={()=>navigate("/blog")}>Блог</div>
                    </div>
                    <div className="footer__section pair">
                        <p>{t("footer.services")}</p>
                        <div>{t("footer.reservation_online")}</div>
                        <div>{t("footer.booking_management")}</div>
                        <div>{t("footer.luggage_transportation")}</div>
                        <div>{t("footer.transportation_animals")}</div>
                    </div>
                    <div className="footer__section">
                        <p>{t("footer.support")}</p>
                        <div>{t("footer.answers_and_questions")}</div>
                        <div>{t("footer.contacts")}</div>
                        <div>{t("footer.about_Tripnet")}</div>
                    </div>
                    <div className='footer__section pair'>
                        <p>{t("footer.contacts")}</p>
                        <div><GiSmartphone />{infoCompany.telephone}</div>
                        <div><CgMail/>{infoCompany.email}</div>
                        <div><BiTime/>{infoCompany.openingHours[language]}</div>
                    </div>
                </div>
                <div className='footer-protected'>
                    <span>{t('footer.protected')}.</span>
                </div>
            </div>
    )
}

export default Footer