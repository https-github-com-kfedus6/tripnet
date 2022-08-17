import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SetLanguage from '../SetLanguage';

const Burger = ({setIsShowRegister}) => {
  const { t, i18n } = useTranslation()
  const [isBurgerClick,setIsBurgerClick]=useState(false);
  const {is_login,user}=useSelector(state=>state.user)
  return (
    <>
      <div className={isBurgerClick?"burger__menu active":"burger__menu"}>  
        <SetLanguage/>
        <ul onClick={()=>{setIsBurgerClick(false)}}>  
          <li>
            {is_login?
              <NavLink to={"/user/"+user.name}>{user.name}</NavLink>
              :
              <div onClick={()=>setIsShowRegister(true)}>
                {t("header.registering")}
              </div>}
          </li>
          <li><NavLink to="/">{t('header.first_link')}</NavLink></li>
          <li><NavLink to="/flights">{t('header.second_link')}</NavLink></li>
          <li><NavLink to="/flightsCategory">{t('header.third_link')}</NavLink></li>
          <li><NavLink to="/flight">{t('header.fourth_link')}</NavLink></li>
        </ul>
        <div className="register">
            </div>
      </div>
      <div onClick={()=>{setIsBurgerClick(!isBurgerClick)}} className={"header__burger"}>
        <GiHamburgerMenu fontSize={"50px"}/>
      </div>
    </>
  )
}

export default Burger