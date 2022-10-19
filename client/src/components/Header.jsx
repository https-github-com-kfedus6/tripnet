import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './common/Logo';
import Burger from './Burger/Burger';
import SetLanguage from './SetLanguage';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Authorize from '../pages/Authorize/Authorize';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa'

const Header = () => {
    const { t, i18n } = useTranslation()
    const { is_admin, is_login, user } = useSelector(state => state.user)
    const [isShow, setIsShow] = useState(false)
    const navigate = useNavigate();
    
    return (
        <div className='header__main'>
            <div className='header__components'>
                <div className='logo__with__link'>
                    <Logo />
                    <ul>
                        <li><NavLink to="/">{t('header.first_link')}</NavLink></li>
                        <li><NavLink to="/flightsCategory">{t('header.third_link')}</NavLink></li>
                        <li><NavLink to="/aboutUs">{t('header.fourth_link')}</NavLink></li>
                        <li><NavLink to='/blog'>{t("header.five_link")}</NavLink></li>
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
                        {/* <li>{is_admin ?
                            <div className='user__nick'>
                                <NavLink to="/admin"><FaUserEdit /></NavLink>
                            </div> : <></>}

                        </li> */}
                    </ul>
                </div>
                <div className='header__register__with__language'>
                    <div className='lang-select'>
                        <SetLanguage />
                    </div>
                    <div>
                        {is_login ?
                            <div className='header_register' onClick={() => navigate("/account")}>
                                <div><FaUserCircle width={"20px"} /></div>
                                <div> {user.name}</div>
                            </div> :
                            <div className='header_register' onClick={() => setIsShow(true)}>
                                <div><FaUserCircle /></div>
                                <div>{t("header.registering")}</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='header__burger'>
                <Burger setIsShowRegister={setIsShow} />
            </div>
            <Authorize isShow={isShow} setIsShow={setIsShow} />
        </div>
    )
}

export default Header;