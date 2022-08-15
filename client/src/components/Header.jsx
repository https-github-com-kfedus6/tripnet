import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './common/Logo';
import Burger from './Burger/Burger';
import SetLanguage from './SetLanguage';

const Header = () => {
    const { t, i18n } = useTranslation()

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
                <SetLanguage/>
            </div>
            <Burger />
        </div>
    )
}

export default Header;