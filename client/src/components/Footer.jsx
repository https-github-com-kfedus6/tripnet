import { t } from 'i18next'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useAction } from '../hooks/useAction';
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    const navigate = useNavigate();
    const { infoCompany } = useSelector(state => state.infoCompany);
    const { blogNovetly } = useSelector(state => state.blog);
    const { language } = useSelector(state => state.language);
    const { GetInfoCompany, GetBlogNovetly, GetFAQNovetly } = useAction();
    const { FAQNovetly } = useSelector(state => state.FAQ);

    useEffect(() => {
        if (infoCompany == undefined) {
            GetInfoCompany();
        }
        GetBlogNovetly(5);
        if (FAQNovetly == undefined) GetFAQNovetly(5)
    }, [])

    return (
        infoCompany == undefined ? <div>...loading</div> :
            <div className='footer-main'>
                <div className='footer-block'>
                    <div className='footer-logo'>
                        <img src={process.env.REACT_APP_API_URL + 'logo.png'} alt="logo" />
                        <span>Всі права захищені.</span>
                    </div>
                    <div className='footer-link'>
                        <p onClick={() => navigate('/flightsCategory')}>Категорія рейсів</p>
                        <p onClick={() => navigate('/blog')}>Блог</p>
                        <p onClick={() => navigate('/FAQ')}>Питання та відповіді</p>
                        <p onClick={() => navigate('/aboutUs')}>Про нас</p>
                    </div>
                    <div className='footer-info'>
                        <p>{infoCompany.name}</p>
                        <p>{infoCompany.email}</p>
                        <p>{infoCompany.telephone}</p>
                        <p>{infoCompany.address[language]}</p>
                        <p>{infoCompany.openingHours}</p>
                    </div>
                    <div className='footer-instagram'>
                        <p>Ми у соц. мережах</p>
                        <div>
                            <a href='https://www.instagram.com/tripnet.com.ua/'><BsInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer