import React from 'react'
import { NavLink } from 'react-router-dom';
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
    return (
        <div className='header__main'>
            <Logo />
            <div className='header__components'>
                <ul>
                    <li><NavLink to="/">{t('header.first_link')}</NavLink></li>
                    <li><NavLink to="/flightsCategory">{t('header.third_link')}</NavLink></li>
                    <li><NavLink to="/aboutUs">{t('header.fourth_link')}</NavLink></li>
                    <li><NavLink to='/blog'>{t("header.five_link")}</NavLink></li>
                    <li>{is_login ? <div><NavLink to='/account'><FaUserCircle /></NavLink></div> :
                        <div onClick={() => setIsShow(true)}><a to="/"><FaUserCircle /></a></div>}
                    </li>
                    <li>{is_admin ?
                        <div className='user__nick'>
                            <NavLink to="/admin"><FaUserEdit /></NavLink>
                        </div> : <></>}

                    </li>
                    <li><SetLanguage /></li>

                </ul>
            </div>
            <Burger setIsShowRegister={setIsShow} />
            <Authorize isShow={isShow} setIsShow={setIsShow} />
        </div >
    )
}

export default Header;