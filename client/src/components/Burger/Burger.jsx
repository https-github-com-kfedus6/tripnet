import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SetLanguage from '../SetLanguage';

const Burger = ({setIsShowRegister}) => {
  const { t, i18n } = useTranslation()
  const [isBurgerClick,setIsBurgerClick]=useState(false);
  const {is_login,user, is_admin}=useSelector(state=>state.user)
  return (
    <>
      <div className={isBurgerClick?"burger__menu active":"burger__menu"}>  
              
        <div onClick={()=>{setIsBurgerClick(false)}}>  
          {is_admin ? <div className='user__nick'><NavLink to="/admin">admin panel</NavLink></div> : <></>}
          {is_login ? <div><NavLink to='/account'><FaUserCircle /></NavLink></div> :
            <div onClick={() => { setIsShowRegister(true) }} className="register">
                {t("header.registering")}
            </div>}
          <div><NavLink to="/">{t('header.first_link')}</NavLink></div>
          <div><NavLink to="/flights">{t('header.second_link')}</NavLink></div>
          <div><NavLink to="/flightsCategory">{t('header.third_link')}</NavLink></div>
          <div><NavLink to="/aboutUs">{t('header.fourth_link')}</NavLink></div>
          <div className='burger__set__language'><SetLanguage/></div>
        </div>
      </div>
      <div onClick={()=>{setIsBurgerClick(!isBurgerClick)}} className={"header__burger"}>
        <GiHamburgerMenu fontSize={"50px"}/>
      </div>
    </>
  )
}

export default Burger