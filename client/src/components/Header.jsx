import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './common/Logo';
import Burger from './Burger/Burger';
import SetLanguage from './SetLanguage';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Authorize from '../pages/Authorize/Authorize';
import { FaProcedures, FaUserCircle, FaUserEdit } from 'react-icons/fa'

const Header = () => {
    const { t, i18n } = useTranslation()
    const { is_admin, is_login, user } = useSelector(state => state.user)
    const [isShow, setIsShow] = useState(false)
    const navigate = useNavigate();

    return (
        <>
            <div className='header__main'>
                <div className='header__components'>
                    <div className='logo__with__link'>
                        <Logo />
                        <ul>
                            <li><NavLink to="/">{t('header.first_link')}</NavLink></li>
                            <li><NavLink to="/flightsCategory">{t('header.third_link')}</NavLink></li>
                            <li><NavLink to="/services">{t('header.six_link')}</NavLink></li>
                            <li><NavLink to='/blog'>{t("header.five_link")}</NavLink></li>
                            <li><NavLink to="/">{t('header.fourth_link')}</NavLink></li>
                            <li className='dropdown-header'>
                                <div className='burger__menu__list header__admin'>
                                    {is_admin ?
                                        <>
                                            <a className="dropdown-toggle-header" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Admin
                                            </a>
                                            <div className="dropdown-menu-header">
                                                <p><NavLink className="dropdown-item-header" to="/infoCompanyEdit">{t('admin.infoCompany')}</NavLink></p>
                                                <p><NavLink className="dropdown-item-header" to="/aboutUsEdit">{t('admin.aboutUs')}</NavLink></p>
                                                <p><NavLink className="dropdown-item-header" to="/blogEdit">{t('admin.blog')}</NavLink></p>
                                                <p><NavLink className="dropdown-item-header" to="/faqEdit">{t('admin.faq')}</NavLink></p>
                                                <p><NavLink className="dropdown-item-header" to="/flightsEdit">{t('admin.flight')}</NavLink></p>
                                                <p><NavLink className="dropdown-item-header" to="/novetlyEdit">{t('admin.novetly')}</NavLink></p>
                                                <p><NavLink className="dropdown-item-header" to="/responseEdit">{t('admin.response')}</NavLink></p>
                                                <p><NavLink className="dropdown-item-header" to="/order">{t('admin.order')}</NavLink></p>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }</div>
                            </li>
                        </ul>
                    </div>
                    <div className='header__register__with__language'>
                        <div className='lang-select'>
                            <SetLanguage />
                        </div>
                        <div>
                            {is_login ?
                                <div className='header_register' onClick={() => navigate("/account")}>
                                    <img src={process.env.REACT_APP_API_URL + 'user.png'} alt="user" />
                                </div> :
                                <div className='header_register' onClick={() => setIsShow(true)}>
                                    <div><span>{t('header.seven_link')}</span></div>
                                    <span>|</span>
                                    <div><span>{t("header.registering")}</span></div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='header__burger'>
                    <div className='header__burger-container'>
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <Burger setIsShowRegister={setIsShow} />
                        </div>
                    </div>
                </div>
            </div>
            <Authorize isShow={isShow} setIsShow={setIsShow} />
        </>
    )
}

export default Header;