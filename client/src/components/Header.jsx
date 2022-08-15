import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './common/Logo';
import Burger from './Burger/Burger';
import SetLanguage from './SetLanguage';
import { useSelector } from 'react-redux';

const Header = () => {
    const { t, i18n } = useTranslation()
    const {is_auth,user}=useSelector(state=>state.user)
    return (
        <div className='header__main'>
            <Logo />
            <div className='header__components'>
                <ul>
                    <li><NavLink to="/">{t('header.first_link')}</NavLink></li>
                    <li><NavLink to="/flights">{t('header.second_link')}</NavLink></li>
                    <li><NavLink to="/flightsCategory">{t('header.third_link')}</NavLink></li>
                    <li><NavLink to="/aboutUs">{t('header.fourth_link')}</NavLink></li>
                </ul>
                <div className="register">
                    {is_auth?<NavLink to={"/user/"+user.nick}>{user.nick}</NavLink>:
                    <NavLink to="/regisering">{t("header.registering")}</NavLink>}
                </div>
                <SetLanguage/>
            </div>
            <Burger />
        </div>
    )
}

export default Header;